import PropTypes from "prop-types";
import React, {useState} from "react";
import {useGetTeamsQuery} from "../../api/teamsApi";
import {getPaginatedArray} from "../../utils/pagination";
import TeamsList from "../components/TeamsList";

const TeamsListContainer = ({teamsPerPage, ...rest}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const {data = {}, error, isFetching} = useGetTeamsQuery();
  const {teams} = data;
  const searchedTeams = teams?.filter(
    (t) => t.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
  );
  const currentTeams = getPaginatedArray(searchedTeams, teamsPerPage, currentPage);

  const onPageChanged = (e, page) => setCurrentPage(page);

  const onSearchChanged = (e) => {
    setSearchValue(e.target.value);
    setCurrentPage(1);
  };

  return (
    <TeamsList
      error={error}
      isFetching={isFetching}
      searchedTeams={searchedTeams}
      currentTeams={currentTeams}
      teamsPerPage={teamsPerPage}
      searchValue={searchValue}
      currentPage={currentPage}
      onSearchChanged={onSearchChanged}
      onPageChanged={onPageChanged}
      {...rest}
    />
  );
};

TeamsListContainer.propTypes = {
  teamsPerPage: PropTypes.number,
};

export default TeamsListContainer;
