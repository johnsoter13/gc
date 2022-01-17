import { trpc } from "@/utils/trpc";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { GolferInput } from "@/types";
import APIAlert from "../APIAlert";

const GolferForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<GolferInput>();
  const addNewGolfer = trpc.useMutation(["add-golfer"]);
  const [apiAlert, setAPIAlert] = useState(false);

  const succesMessage = 'Golfer successfully added!';
  const errorMessage = 'There was an error adding a new golfer, please try again';

  const onSubmit: SubmitHandler<GolferInput> = (data) =>  {
    addNewGolfer.mutate(data);
    setAPIAlert(true);
    reset()
  };

  return (
    <>
      {apiAlert && <APIAlert type={addNewGolfer?.isError ? 'error' : 'success'} callback={() => setAPIAlert(false)} message={addNewGolfer?.isError ? errorMessage : succesMessage}/>}
      <form className="flex flex-col p-4 h-screen justify-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col p-2 m-4 ">
          <label htmlFor="golferName">Golfer Name</label>
          <input id="golferName" className="text-black p-2" {...register("golferName", { required: true, maxLength: 50 })} />
        </div>
        <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 border border-blue-700 rounded" type="submit" />
      </form>
    </>
  )
};

export default GolferForm;