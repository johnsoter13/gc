import type { NextPage } from 'next'
import * as React from 'react';

import GolfCourseNav from '@/components/GolfCourseNav'
import GolferForm from '@/components/GolferForm';

const AddGolfCourse: NextPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <GolfCourseNav />
      <GolferForm />
    </div>
  )
}

export default AddGolfCourse;
