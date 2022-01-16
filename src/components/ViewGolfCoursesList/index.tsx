import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { GolfCourseProps } from "@/types";

const ViewGolfCoursesList = (props: GolfCourseProps) => {
  return (
    <div className="flex justify-center items-center h-full">
      <TableContainer className="flex h-[700px]" component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="golf course table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Course Name</TableCell>
              <TableCell align="left">Rating</TableCell>
              <TableCell align="left">Slope</TableCell>
              <TableCell align="left">Yards</TableCell>
              <TableCell align="left">Par Score</TableCell>
              <TableCell align="left">Handicap</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props?.golfCourses?.map((gc, i) => (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {gc.golfCourseName}
                </TableCell>
                <TableCell align="left">{gc.golfCourseRating}</TableCell>
                <TableCell align="left">{gc.golfCourseSlope}</TableCell>
                <TableCell align="left">{gc.golfCourseYards}</TableCell>
                <TableCell align="left">{gc.golfCourseParScore}</TableCell>
                <TableCell align="left">{gc.golfCourseHandicap}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
};

export default ViewGolfCoursesList;