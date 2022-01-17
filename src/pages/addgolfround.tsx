import * as React from 'react';

import GolfCourseNav from '@/components/GolfCourseNav'
import GolfRoundForm from '@/components/GolfRoundForm';
import { trpc } from '@/utils/trpc';

const AddGolfRound = () => {
  const {
    data: golfCourses,
    refetch: golfCoursesRefetch,
    isLoading: golfCoursesLoading,
  } = trpc.useQuery(["get-golf-courses"], {
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const {
    data: golfers,
    refetch: refetchGolfers,
    isLoading: golfersLoading,
  } = trpc.useQuery(["get-golfers"], {
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="h-screen w-screen flex flex-col">
      <GolfCourseNav />
      {(!golfCoursesLoading && !golfersLoading) && golfCourses && golfers &&  <GolfRoundForm golfers={golfers.golfers} golfCourses={golfCourses.golfCourses} />}
    </div>
  )
}

export default AddGolfRound;
