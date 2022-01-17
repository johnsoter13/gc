import type { NextPage } from 'next'

import GolfCourseNav from '@/components/GolfCourseNav';
import ViewGolfRoundsList from '@/components/ViewGolfRoundsList';
import { trpc } from '@/utils/trpc';

const ViewGolfRounds: NextPage = () => {
  const {
    data,
    refetch,
    isLoading,
  } = trpc.useQuery(["get-golf-rounds"], {
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="h-screen w-screen flex flex-col">
      <GolfCourseNav />
      {!isLoading && data && <ViewGolfRoundsList golfRounds={data.golfRounds} />}
    </div>
  )
}

export default ViewGolfRounds;
