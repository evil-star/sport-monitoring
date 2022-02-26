import PropTypes from "prop-types";
import {
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React from "react";

const MatchesTable = ({matches = [], isFetching = false, skeletonsAmount = 1}) => {
  // Creating skeletons
  const skeletons = [];
  for (let index = 0; index < skeletonsAmount; index++) {
    skeletons.push(
      <TableRow key={index}>
        <TableCell>
          <Skeleton />
        </TableCell>
        <TableCell>
          <Skeleton />
        </TableCell>
        <TableCell>
          <Skeleton />
        </TableCell>
        <TableCell align="right">
          <Skeleton />
        </TableCell>
        <TableCell align="center">-</TableCell>
        <TableCell>
          <Skeleton />
        </TableCell>
        <TableCell align="right">
          <Skeleton />
        </TableCell>
      </TableRow>
    );
  }

  return (
    <TableContainer component={Paper} elevation={3} sx={{mb: "30px"}}>
      <Table>
        <TableBody>
          {isFetching
            ? skeletons
            : matches.map((m) => (
                <TableRow key={m.id}>
                  <TableCell>{m.date}</TableCell>
                  <TableCell>{m.time}</TableCell>
                  <TableCell>{m.status}</TableCell>
                  <TableCell align="right">{m.commandA}</TableCell>
                  <TableCell align="center">-</TableCell>
                  <TableCell>{m.commandB}</TableCell>
                  <TableCell align="right">{m.score}</TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

MatchesTable.propTypes = {
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
  isFetching: PropTypes.bool,
  skeletonsAmount: PropTypes.number,
};

export default MatchesTable;
