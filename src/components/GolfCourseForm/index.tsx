import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  gcName: string;
  gcRating: string; // decimal
  gcSlope: number; // decimal
  gcYards: number;
  gcParScore: number;
  gcHandicap: number; // decimal
}

const GolfCourseForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form className="flex flex-col p-4 h-screen justify-center" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col p-2 m-4 ">
        <label htmlFor="gcName">Golf Course Name</label>
        <input id="gcName" className="text-black p-2" {...register("gcName", { required: true, maxLength: 20 })} />
      </div>
      <div className="flex flex-col p-2 m-4 ">
        <label htmlFor="gcRating">Golf Course Rating</label>
        <input className="text-black p-2" type="number" {...register("gcRating", { min: 18, max: 99 })} />
      </div>
      <div className="flex flex-col p-2 m-4 ">
        <label htmlFor="gcRating">Golf Course Slope</label>
        <input className="text-black p-2" type="number" {...register("gcSlope", { min: 50, max: 200 })} />
      </div>
      <div className="flex flex-col p-2 m-4 ">
        <label htmlFor="gcYards">Golf Course Yards</label>
        <input className="text-black p-2" type="number" {...register("gcYards", { min: 1000, max: 10000 })} />
      </div>     
      <div className="flex flex-col p-2 m-4 ">
        <label htmlFor="gcParScore">Golf Course Par Score</label>
        <input className="text-black p-2" type="number" {...register("gcParScore", { min: 50, max: 100 })} />
      </div>
      <div className="flex flex-col p-2 m-4 ">
        <label htmlFor="gcHandicap">Golf Course Handicap</label>
        <input className="text-black p-2" type="number" {...register("gcHandicap", { min: 1, max: 100 })} />
      </div>
      <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 border border-blue-700 rounded" type="submit" />
    </form>
  )
};

export default GolfCourseForm;