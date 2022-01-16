import type { GetServerSideProps } from 'next';

import GolfCourseNav from '@/components/GolfCourseNav';
import ViewGolfCoursesList from '@/components/ViewGolfCoursesList';
import {prisma} from '@/backend/utils/prisma';
import { GolfCourseProps } from '@/types';

const ViewGolfCourses = (props: GolfCourseProps) => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <GolfCourseNav />
      <ViewGolfCoursesList golfCourses={props?.golfCourses} />
    </div>
  )
}

export const getStaticProps: GetServerSideProps = async () => {
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
  return {
    props: { golfCourses }, // will be passed to the page component as props
  };
}

export default ViewGolfCourses;
