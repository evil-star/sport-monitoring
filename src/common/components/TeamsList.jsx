import PropTypes from "prop-types";
import {Box, Grid, Pagination, Typography} from "@mui/material";
import React from "react";
import Search from "../ui/Search/Search";
import TeamCard from "../ui/TeamCard/TeamCard";

const TeamsList = ({
  error = false,
  isFetching = false,
  searchedTeams = [],
  currentTeams = [],
  teamsPerPage = 10,
  currentPage = 1,
  searchValue,
  onSearchChanged,
  onPageChanged,
}) => {
  const pageCount = Math.ceil(searchedTeams.length / teamsPerPage);

  // Creating skeletons
  const skeletons = [];
  for (let index = 0; index < teamsPerPage; index++) {
    skeletons.push(
      <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
        <TeamCard isFetching />
      </Grid>
    );
  }

  return (
    <>
      <Box sx={{mb: "30px"}}>
        <Search placeholder="Поиск…" value={searchValue} onChange={onSearchChanged} />
      </Box>

      {error ? (
        <Typography>Ошибка при получении данных</Typography>
      ) : searchValue && !searchedTeams.length ? (
        <Typography>Ничего не найдено</Typography>
      ) : (
        <Grid container spacing={2} sx={{mb: "30px"}}>
          {isFetching
            ? skeletons
            : currentTeams.map((t) => (
                <Grid item xs={12} sm={6} lg={2.4} key={t.id}>
                  <TeamCard
                    name={t.name}
                    logoUrl={t.crestUrl}
                    href={`/teams/${t.id}/team-calendar`}
                  />
                </Grid>
              ))}
        </Grid>
      )}

      {searchedTeams.length > teamsPerPage && !error && !isFetching ? (
        <Pagination
          onChange={onPageChanged}
          page={currentPage}
          count={pageCount}
          color="primary"
          sx={{display: "flex", justifyContent: "center"}}
        />
      ) : null}
    </>
  );
};

TeamsList.propTypes = {
  searchedTeams: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      crestUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  currentTeams: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      crestUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  teamsPerPage: PropTypes.number,
  currentPage: PropTypes.number,
  searchValue: PropTypes.string,
  error: PropTypes.any,
  isFetching: PropTypes.bool,
  onSearchChanged: PropTypes.func,
  onPageChanged: PropTypes.func,
};

export default TeamsList;
