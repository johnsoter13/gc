import { GetServerSideProps } from 'next';
import { PrismaClient } from '.prisma/client';

import GolfCourseNav from '@/components/GolfCourseNav';
import { GolferProps } from '@/types';
import ViewGolfersList from '@/components/ViewGolfersList';
import { trpc } from '@/utils/trpc';

const ViewGolfers = () => {
  const {
    data,
    refetch,
    isLoading,
  } = trpc.useQuery(["get-golfers"], {
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="h-screen w-screen flex flex-col">
      <GolfCourseNav />
      {!isLoading && data && <ViewGolfersList golfers={data.golfers} />}
    </div>
  )
}

export default ViewGolfers;
