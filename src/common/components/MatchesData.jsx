import PropTypes from "prop-types";
import { DatePicker } from "@mui/lab";
import { TextField, Typography, Pagination } from "@mui/material";
import { Box } from "@mui/system";
import { add } from "date-fns";
import React from "react";
import MatchesTable from "../ui/MatchesTable/MatchesTable";

const MatchesData = ({
    isFetching = false,
    error,
    matches = [],
    currentMatches = [],
    filters = {},
    matchesPerPage,
    currentPage = 1,
    onPageChanged,
    onFilterChanged,
}) => {
    const pageCount = Math.ceil(matches.length / matchesPerPage);

    return (
        <>
            <Box sx={{ display: "flex", alignItems: "center", mb: "30px" }}>
                <Typography sx={{ mr: "20px" }}>с</Typography>
                <DatePicker
                    label="Дата"
                    mask={"__.__.____"}
                    value={filters.dateFrom}
                    onChange={(value) => onFilterChanged(value, "dateFrom")}
                    renderInput={(params) => (
                        <TextField {...params} sx={{ mr: "20px" }} />
                    )}
                    maxDate={
                        filters.dateTo &&
                        add(new Date(filters.dateTo), { days: -1 })
                    }
                    minDate={
                        filters.dateTo &&
                        add(new Date(filters.dateTo), {
                            years: -5,
                            days: 1,
                        })
                    }
                />
                <Typography sx={{ mr: "20px" }}>по</Typography>
                <DatePicker
                    label="Дата"
                    mask={"__.__.____"}
                    value={filters.dateTo}
                    onChange={(value) => onFilterChanged(value, "dateTo")}
                    renderInput={(params) => <TextField {...params} />}
                    minDate={
                        filters.dateFrom &&
                        add(new Date(filters.dateFrom), { days: 1 })
                    }
                    maxDate={
                        filters.dateFrom &&
                        add(new Date(filters.dateFrom), {
                            years: 5,
                            days: -1,
                        })
                    }
                />
            </Box>
            {error ? (
                <Typography>Ошибка при получении данных</Typography>
            ) : !matches.length && !isFetching ? (
                <Typography>Данные не найдены</Typography>
            ) : isFetching ? (
                <MatchesTable isFetching skeletonsAmount={matchesPerPage} />
            ) : (
                <MatchesTable matches={currentMatches} />
            )}
            {matches.length > matchesPerPage && !error && !isFetching ? (
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

MatchesData.propTypes = {
    matches: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            date: PropTypes.string,
            time: PropTypes.string,
            status: PropTypes.string,
            commandA: PropTypes.string,
            commandB: PropTypes.string,
            score: PropTypes.string,
        })
    ),
    currentMatches: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            date: PropTypes.string,
            time: PropTypes.string,
            status: PropTypes.string,
            commandA: PropTypes.string,
            commandB: PropTypes.string,
            score: PropTypes.string,
        })
    ),
    filters: PropTypes.object,
    matchesPerPage: PropTypes.number,
    currentPage: PropTypes.number,
    error: PropTypes.any,
    isFetching: PropTypes.bool,
    onPageChanged: PropTypes.func,
    onFilterChanged: PropTypes.func,
};

export default MatchesData;
