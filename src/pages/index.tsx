import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import GolfCourseNav from '@/components/GolfCourseNav'
import { useEffect } from 'react'
import { ADD_GOLF_COURSE } from '@/constants'

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(ADD_GOLF_COURSE);
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col">
      <GolfCourseNav />
    </div>
  )
}

export default Home
