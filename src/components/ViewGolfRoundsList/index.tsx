import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from 'moment'; 

import { GolfRoundProps } from "@/types";
import { DEFAULT_TABLE_ALIGNMENT } from "@/constants";

const ViewGolfRoundsList = (props: GolfRoundProps) => {
  return (
    <div className="flex justify-center items-center h-full">
      <TableContainer className="flex h-[700px]" component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="golf course table">
          <TableHead>
            <TableRow>
              <TableCell align={DEFAULT_TABLE_ALIGNMENT}>Golfer</TableCell>
              <TableCell align={DEFAULT_TABLE_ALIGNMENT}>Golf Course</TableCell>
              <TableCell align={DEFAULT_TABLE_ALIGNMENT}>Score</TableCell>
              <TableCell align={DEFAULT_TABLE_ALIGNMENT}>Fairways Hit</TableCell>
              <TableCell align={DEFAULT_TABLE_ALIGNMENT}>Greens in Regulation</TableCell>
              <TableCell align={DEFAULT_TABLE_ALIGNMENT}>Putts</TableCell>
              <TableCell align={DEFAULT_TABLE_ALIGNMENT}>Date</TableCell>
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
                    {gr?.golfer?.golferName}
                  </TableCell>
                  <TableCell align={DEFAULT_TABLE_ALIGNMENT}>{gr?.golfCourse?.golfCourseName}</TableCell>
                  <TableCell align={DEFAULT_TABLE_ALIGNMENT}>{gr.score}</TableCell>
                  <TableCell align={DEFAULT_TABLE_ALIGNMENT}>{gr.fairwaysHitFraction}</TableCell>
                  <TableCell align={DEFAULT_TABLE_ALIGNMENT}>{gr.greensInRegulationFraction}</TableCell>
                  <TableCell align={DEFAULT_TABLE_ALIGNMENT}>{gr.putts}</TableCell>
                  <TableCell align={DEFAULT_TABLE_ALIGNMENT}>{moment(date).format('LL')}</TableCell>
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