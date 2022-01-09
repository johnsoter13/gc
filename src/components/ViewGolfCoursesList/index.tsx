import { GolfCoursProps } from "@/types";
import React from "react";

const ViewGolfCoursesList = (props: GolfCoursProps) => {
  return (
    <div className="flex flex-col p-4 h-screen justify-center">{props?.golfCourses?.map((gc, i) => {
      return (
        <div key={i}>
          {gc.golfCourseName}
        </div>
      )
    })}</div>
  )
};

export default ViewGolfCoursesList;