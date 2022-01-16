import { PrismaClient } from '.prisma/client';

import GolfCourseNav from '@/components/GolfCourseNav';
import ViewGolfCoursesList from '@/components/ViewGolfCoursesList';
import { GolfCourseProps } from '@/types';
import { trpc } from '@/utils/trpc';
import { GetServerSideProps } from 'next';

const ViewGolfCourses = () => {
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
