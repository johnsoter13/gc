import { trpc } from "@/utils/trpc";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { IGolfer } from "@/types";

const GolferForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IGolfer>();
  const addNewGolfer = trpc.useMutation(["add-golfer"]);

  const onSubmit: SubmitHandler<IGolfer> = (data) =>  {
    addNewGolfer.mutate(data);
  };

  return (
    <form className="flex flex-col p-4 h-screen justify-center" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col p-2 m-4 ">
        <label htmlFor="golfCourseName">Golfer Name</label>
        <input id="golfCourseName" className="text-black p-2" {...register("golferName", { required: true, maxLength: 50 })} />
      </div>
      <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 border border-blue-700 rounded" type="submit" />
    </form>
  )
};

export default GolferForm;