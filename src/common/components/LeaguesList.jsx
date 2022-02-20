import PropTypes from "prop-types";
import { Box, Grid, Pagination } from "@mui/material";
import React from "react";
import LeagueCard from "../ui/LeagueCard/LeagueCard";
import Search from "../ui/Search/Search";

const LeaguesList = ({
    currentLeagues = [],
    searchedLeagues = [],
    leaguesPerPage = 12,
    searchValue = "",
    currentPage = 1,
    error,
    isFetching,
    onPageChanged,
    onSearchChanged,
}) => {
    const pageCount = Math.ceil(searchedLeagues.length / leaguesPerPage);

    // Creating skeletons
    const skeletons = [];
    for (let index = 0; index < leaguesPerPage; index++) {
        skeletons.push(
            <Grid item xs={12} sm={6} md={4} key={index}>
                <LeagueCard isFetching />
            </Grid>
        );
    }

    return (
        <>
            <Box sx={{ mb: "30px" }}>
                <Search
                    placeholder="Поиск…"
                    value={searchValue}
                    onChange={onSearchChanged}
                />
            </Box>

            <Grid container spacing={2} sx={{ mb: "30px" }}>
                {error ? (
                    <Grid item>Ошибка при получении данных</Grid>
                ) : isFetching ? (
                    skeletons
                ) : searchValue && !searchedLeagues.length ? (
                    <Grid item>Ничего не найдено</Grid>
                ) : (
                    currentLeagues.map(({ id, name, area }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <LeagueCard
                                name={name}
                                areaName={area.name}
                                href={`/leagues/${id}/league-calendar`}
                            />
                        </Grid>
                    ))
                )}
            </Grid>
            {searchedLeagues.length > 12 && !error && !isFetching ? (
                <Pagination
                    onChange={onPageChanged}
                    page={currentPage}
                    count={pageCount}
                    color="primary"
                    sx={{ display: "flex", justifyContent: "center" }}
                />
            ) : null}
        </>
    );
};

LeaguesList.propTypes = {
    currentLeagues: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            area: PropTypes.shape({
                name: PropTypes.string.isRequired,
            }),
        })
    ),
    searchedLeagues: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            area: PropTypes.shape({
                name: PropTypes.string.isRequired,
            }),
        })
    ),
    leaguesPerPage: PropTypes.number,
    searchValue: PropTypes.string,
    currentPage: PropTypes.number,
    error: PropTypes.any,
    isFetching: PropTypes.bool,
    onPageChanged: PropTypes.func,
    onSearchChanged: PropTypes.func,
};

export default LeaguesList;
