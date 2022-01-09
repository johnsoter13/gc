import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import GolfCourseNav from '@/components/GolfCourseNav'
import GolfCourseForm from '@/components/GolfCourseForm'

const AddGolfCourse: NextPage = () => {
  const router = useRouter();

  return (
    <div className="h-screen w-screen flex flex-col">
      <GolfCourseNav />
      <GolfCourseForm />
    </div>
  )
}

export default AddGolfCourse;
