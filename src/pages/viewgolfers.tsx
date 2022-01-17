import type { NextPage } from 'next'

import GolfCourseNav from '@/components/GolfCourseNav';
import ViewGolfersList from '@/components/ViewGolfersList';
import { trpc } from '@/utils/trpc';

const ViewGolfers: NextPage = () => {
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
