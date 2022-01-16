import React from "react";

import { GolfRoundInput, GolfProps } from "@/types";
import { trpc } from "@/utils/trpc";
import { SubmitHandler, useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const GolfRoundForm = (props: GolfProps) => {
  const [golfCourseId, setGolfCourseId] = React.useState('');
  const [golferId, setGolferId] = React.useState('');

  const handleGolfCourseChange = (event: SelectChangeEvent) => {
    setGolfCourseId(event.target.value as string);
  };

  const handleGolferChange = (event: SelectChangeEvent) => {
    setGolferId(event.target.value as string);
  };

  const { register, handleSubmit, formState: { errors } } = useForm<GolfRoundInput>();
  const addNewGR = trpc.useMutation(["add-golf-round"]);

  const onSubmit: SubmitHandler<GolfRoundInput> = (data) =>  {
    const finalData = {
      ...data,
      golferId,
      golfCourseId,
    }
    addNewGR.mutate(finalData);
  };

  return (
    <form className="flex flex-col p-4 h-screen justify-center" onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ minWidth: 120 }}>
        <FormControl className="bg-white mb-12" fullWidth>
          <InputLabel id="demo-simple-select-label">Golf Course</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={golfCourseId}
            label="golfCourseId"
            onChange={handleGolfCourseChange}
          >
            {props?.golfCourses?.map((gc, i) => <MenuItem key={i} value={gc.golfCourseId}>{gc.golfCourseName}</MenuItem>)}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl className="bg-white mb-12" fullWidth>
          <InputLabel id="demo-simple-select-label">Golfer</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={golferId}
            label="golferId"
            onChange={handleGolferChange}
          >
            {props?.golfers?.map((golfer, i) => <MenuItem key={i} value={golfer.golferId}>{golfer.golferName}</MenuItem>)}
          </Select>
        </FormControl>
      </Box>
      <div className="flex flex-col p-2 m-4 ">
        <label htmlFor="golfCourseSlope">Score</label>
        <input id="golfCourseSlope" className="text-black p-2" {...register("score", { min: 1, max: 200 })} />
      </div>
      <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 border border-blue-700 rounded" type="submit" />
    </form>
  )
};

export default GolfRoundForm;