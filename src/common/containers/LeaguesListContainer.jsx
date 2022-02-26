import PropTypes from "prop-types";
import React, {useState} from "react";
import {useGetLeaguesQuery} from "../../api/leaguesApi";
import {getPaginatedArray} from "../../utils/pagination";
import LeaguesList from "../components/LeaguesList";

const LeaguesListContainer = ({leaguesPerPage, ...rest}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const {data = {}, error, isFetching} = useGetLeaguesQuery();
  const {competitions} = data;
  const searchedLeagues = competitions?.filter(
    (l) =>
      l.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0 ||
      l.area.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
  );
  const currentLeagues = getPaginatedArray(searchedLeagues, leaguesPerPage, currentPage);

  const onPageChanged = (e, page) => setCurrentPage(page);

  const onSearchChanged = (e) => {
    setSearchValue(e.target.value);
    setCurrentPage(1);
  };

  return (
    <LeaguesList
      isFetching={isFetching}
      error={error?.error}
      searchedLeagues={searchedLeagues}
      currentLeagues={currentLeagues}
      leaguesPerPage={leaguesPerPage}
      searchValue={searchValue}
      currentPage={currentPage}
      onPageChanged={onPageChanged}
      onSearchChanged={onSearchChanged}
      {...rest}
    />
  );
};

LeaguesListContainer.propTypes = {
  leaguesPerPage: PropTypes.number,
};

export default LeaguesListContainer;
