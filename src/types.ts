export interface IGolfCourse {
  golfCourseName: string;
  golfCourseRating: string; // decimal
  golfCourseSlope: string; // decimal
  golfCourseYards: string;
  golfCourseParScore: string;
  golfCourseHandicap: string; // decimal
}

export interface GolfCoursProps {
  golfCourses: Array<IGolfCourse>
}