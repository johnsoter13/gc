import { IFormInput } from "@/types";
import { trpc } from "@/utils/trpc";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const GolfCourseForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const addNewGC = trpc.useMutation(["add-new-gc"]);

  const onSubmit: SubmitHandler<IFormInput> = (data) =>  {
    addNewGC.mutate(data);
  };

  return (
    <form className="flex flex-col p-4 h-screen justify-center" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col p-2 m-4 ">
        <label htmlFor="golfCourseName">Golf Course Name</label>
        <input id="golfCourseName" className="text-black p-2" {...register("golfCourseName", { required: true, maxLength: 20 })} />
      </div>
      <div className="flex flex-col p-2 m-4 ">
        <label htmlFor="golfCourseRating">Golf Course Rating</label>
        <input id="golfCourseRating" className="text-black p-2" {...register("golfCourseRating", { min: 1, max: 99 })} />
      </div>
      <div className="flex flex-col p-2 m-4 ">
        <label htmlFor="golfCourseSlope">Golf Course Slope</label>
        <input id="golfCourseSlope" className="text-black p-2" {...register("golfCourseSlope", { min: 1, max: 200 })} />
      </div>
      <div className="flex flex-col p-2 m-4 ">
        <label htmlFor="golfCourseYards">Golf Course Yards</label>
        <input id="golfCourseYards" className="text-black p-2" {...register("golfCourseYards", { min: 1, max: 10000 })} />
      </div>     
      <div className="flex flex-col p-2 m-4 ">
        <label htmlFor="golfCourseParScore">Golf Course Par Score</label>
        <input id="golfCourseParScore" className="text-black p-2" {...register("golfCourseParScore", { min: 1, max: 100 })} />
      </div>
      <div className="flex flex-col p-2 m-4 ">
        <label htmlFor="golfCourseHandicap">Golf Course Handicap</label>
        <input id="golfCourseHandicap" className="text-black p-2" {...register("golfCourseHandicap", { min: 1, max: 100 })} />
      </div>
      <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 border border-blue-700 rounded" type="submit" />
    </form>
  )
};

export default GolfCourseForm;