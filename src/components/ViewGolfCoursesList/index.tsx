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
              <TableCell>Course Name</TableCell>
              <TableCell align="right">Rating</TableCell>
              <TableCell align="right">Slope</TableCell>
              <TableCell align="right">Yards</TableCell>
              <TableCell align="right">Par Score</TableCell>
              <TableCell align="right">Handicap</TableCell>
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
                <TableCell align="right">{gc.golfCourseRating}</TableCell>
                <TableCell align="right">{gc.golfCourseSlope}</TableCell>
                <TableCell align="right">{gc.golfCourseYards}</TableCell>
                <TableCell align="right">{gc.golfCourseParScore}</TableCell>
                <TableCell align="right">{gc.golfCourseHandicap}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
};

export default ViewGolfCoursesList;