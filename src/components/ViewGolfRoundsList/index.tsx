import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { GolfRoundProps } from "@/types";

const ViewGolfRoundsList = (props: GolfRoundProps) => {
  return (
    <div className="flex justify-center items-center h-full">
      <TableContainer className="flex h-[700px]" component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="golf course table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Golfer</TableCell>
              <TableCell align="left">Golf Course</TableCell>
              <TableCell align="left">Score</TableCell>
              <TableCell align="left">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props?.golfRounds?.map((gr, i) => {
              const date = gr.createdAt.toString()
              return (
                <TableRow
                  key={i}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {gr.golferId}
                  </TableCell>
                  <TableCell align="left">{gr.golfCourseId}</TableCell>
                  <TableCell align="left">{gr.score}</TableCell>
                  <TableCell align="left">{date}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
};

export default ViewGolfRoundsList;