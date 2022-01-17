import type { NextPage } from 'next'

import GolfCourseNav from '@/components/GolfCourseNav';
import ViewGolfCoursesList from '@/components/ViewGolfCoursesList';
import { trpc } from '@/utils/trpc';

const ViewGolfCourses: NextPage = () => {
  const {
    data,
    refetch,
    isLoading,
  } = trpc.useQuery(["get-golf-courses"], {
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
  return (
    <div className="h-screen w-screen flex flex-col">
      <GolfCourseNav />
      {!isLoading && data && <ViewGolfCoursesList golfCourses={data?.golfCourses} />}
    </div>
  )
}

export default ViewGolfCourses;
