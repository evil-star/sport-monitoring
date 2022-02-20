import PropTypes from "prop-types";
import { format } from "date-fns";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetLeagueMatchesQuery } from "../../api/leaguesApi";
import { useGetTeamMatchesQuery } from "../../api/teamsApi";
import { formatMatchesData } from "../../utils/match";
import { getPaginatedArray } from "../../utils/pagination";
import MatchesTable from "../components/MatchesData";

const MatchesTableContainer = ({
    queryHookType = "leagues",
    matchesPerPage,
    ...rest
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState({
        dateFrom: null,
        dateTo: null,
    });
    const { leagueId, teamId } = useParams();

    const getQueryHook = () => {
        if (queryHookType === "leagues") return useGetLeagueMatchesQuery;
        if (queryHookType === "team") return useGetTeamMatchesQuery;
    };

    // Creating params for api request
    const getQueryParams = () => {
        const params = {};
        if (queryHookType === "leagues") params.id = leagueId;
        if (queryHookType === "team") params.id = teamId;
        if (filters.dateFrom && filters.dateTo) {
            params.dateFrom = format(filters.dateFrom, "yyyy-MM-dd");
            params.dateTo = format(filters.dateTo, "yyyy-MM-dd");
        }
        return params;
    };

    // Fetching api data
    const {
        matches = [],
        error,
        isFetching,
    } = getQueryHook()(getQueryParams(), {
        selectFromResult: ({ data, ...rest }) => ({
            ...rest,
            matches: formatMatchesData(data?.matches),
        }),
    });

    const currentMatches = getPaginatedArray(
        matches,
        matchesPerPage,
        currentPage
    );

    const onPageChanged = (e, page) => setCurrentPage(page);

    const onFilterChanged = (value, filterName) => {
        const newFilters = { ...filters, [filterName]: value };
        setFilters(newFilters);
        if (newFilters.dateFrom && newFilters.dateTo) setCurrentPage(1);
    };

    return (
        <MatchesTable
            error={error}
            isFetching={isFetching}
            matches={matches}
            currentMatches={currentMatches}
            matchesPerPage={matchesPerPage}
            filters={filters}
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            onFilterChanged={onFilterChanged}
            {...rest}
        />
    );
};

MatchesTableContainer.propTypes = {
    queryHookType: PropTypes.string,
    matchesPerPage: PropTypes.number,
};

export default MatchesTableContainer;
