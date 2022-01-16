import type { GetServerSideProps } from 'next';
import { PrismaClient } from '.prisma/client';

import GolfCourseNav from '@/components/GolfCourseNav';
import prisma from '@/backend/utils/prisma';
import { GolfRoundProps } from '@/types';
import ViewGolfRoundsList from '@/components/ViewGolfRoundsList';

const ViewGolfRounds = (props: GolfRoundProps) => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <GolfCourseNav />
      <ViewGolfRoundsList golfRounds={props?.golfRounds} />
    </div>
  )
}

export const getStaticProps: GetServerSideProps = async () => {
  const prisma = new PrismaClient();
  const golfRounds = await prisma.golfRound.findMany({
    select: {
      score: true,
      createdAt: true,
      golferId: true,
      golfCourseId: true,
      golfRoundId: true,
    }
  });

  if (!golfRounds) {
    return {
      notFound: true,
    }
  }

  return {
    props: { golfRounds }, revalidate: 1 // will be passed to the page component as props
  };
}

export default ViewGolfRounds;
