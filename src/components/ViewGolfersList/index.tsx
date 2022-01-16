import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { GolferProps } from "@/types";

const ViewGolfersList = (props: GolferProps) => {
  return (
    <div className="flex justify-center items-center h-full">
      <TableContainer className="flex h-[700px]" component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="golf course table">
          <TableHead>
            <TableRow>
              <TableCell>Golfer Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props?.golfers?.map((gc, i) => (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {gc.golferName}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
};

export default ViewGolfersList;