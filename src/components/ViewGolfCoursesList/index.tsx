import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { GolfCourseProps } from "@/types";
import { DEFAULT_TABLE_ALIGNMENT } from "@/constants";

const ViewGolfCoursesList = (props: GolfCourseProps) => {
  return (
    <div className="flex justify-center items-center h-full">
      <TableContainer className="flex h-[700px]" component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="golf course table">
          <TableHead>
            <TableRow>
              <TableCell align={DEFAULT_TABLE_ALIGNMENT}>Course Name</TableCell>
              <TableCell align={DEFAULT_TABLE_ALIGNMENT}>Tee Box</TableCell>
              <TableCell align={DEFAULT_TABLE_ALIGNMENT}>Rating</TableCell>
              <TableCell align={DEFAULT_TABLE_ALIGNMENT}>Slope</TableCell>
              <TableCell align={DEFAULT_TABLE_ALIGNMENT}>Yards</TableCell>
              <TableCell align={DEFAULT_TABLE_ALIGNMENT}>Par Score</TableCell>
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
                <TableCell align={DEFAULT_TABLE_ALIGNMENT}>{gc.golfCourseTeeBox}</TableCell>
                <TableCell align={DEFAULT_TABLE_ALIGNMENT}>{gc.golfCourseRating}</TableCell>
                <TableCell align={DEFAULT_TABLE_ALIGNMENT}>{gc.golfCourseSlope}</TableCell>
                <TableCell align={DEFAULT_TABLE_ALIGNMENT}>{gc.golfCourseYards}</TableCell>
                <TableCell align={DEFAULT_TABLE_ALIGNMENT}>{gc.golfCourseParScore}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
};

export default ViewGolfCoursesList;