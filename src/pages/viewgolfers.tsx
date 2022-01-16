import { GetServerSideProps } from 'next';
import { PrismaClient } from '.prisma/client';

import GolfCourseNav from '@/components/GolfCourseNav';
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
  const prisma = new PrismaClient();
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
    props: { golfers, revalidate: 1 }, // will be passed to the page component as props
  };
}

export default ViewGolfers;
