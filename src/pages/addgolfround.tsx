import * as React from 'react';
import type { GetServerSideProps } from 'next';
import { PrismaClient } from '.prisma/client';

import GolfCourseNav from '@/components/GolfCourseNav'
import GolfRoundForm from '@/components/GolfRoundForm';
import { GolfProps } from '@/types';

const AddGolfRound = (props: GolfProps) => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <GolfCourseNav />
      <GolfRoundForm golfers={props?.golfers} golfCourses={props?.golfCourses} />
    </div>
  )
}

export const getStaticProps: GetServerSideProps = async () => {
  const prisma = new PrismaClient();
  const golfCourses = await prisma.golfCourse.findMany({
    select: {
      golfCourseId: true,
      golfCourseName: true,
      golfCourseRating: true,
      golfCourseSlope: true,
      golfCourseYards: true,
      golfCourseParScore: true,
      golfCourseHandicap: true,
    }
  });

  if (!golfCourses) {
    return {
      notFound: true,
    }
  }

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
    props: { golfCourses, golfers }, // will be passed to the page component as props
  };
}

export default AddGolfRound;
