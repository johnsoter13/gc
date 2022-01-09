import React from "react";

const ViewGolfCoursesList = ({golfCourses}) => {
  console.log(golfCourses);
  return (
    <div className="flex flex-col p-4 h-screen justify-center">{golfCourses?.map((gc, i) => {
      return (
        <div key={i}>
          {gc.golfCourseName}
        </div>
      )
    })}</div>
  )
};

export default ViewGolfCoursesList;