import type { GetServerSideProps } from 'next';

import GolfCourseNav from '@/components/GolfCourseNav';
import {prisma} from '@/backend/utils/prisma';
import { GolferProps } from '@/types';
import ViewGolfersList from '@/components/ViewGolfersList';

const ViewGolfers = (props: GolferProps) => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <GolfCourseNav />
      <ViewGolfersList golfers={props?.golfers} />
    </div>
  )
}

export const getStaticProps: GetServerSideProps = async () => {
  const golfers = await prisma.golfer.findMany({
    select: {
      golferId: true,
      golferName: true,
    }
  });

  if (!golfers) {
    return {
      notFound: true,
    }
  }
  return {
    props: { golfers }, // will be passed to the page component as props
  };
}

export default ViewGolfers;
