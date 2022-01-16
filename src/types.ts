export interface IGolfCourse {
  golfCourseName: string;
  golfCourseRating: string; // decimal
  golfCourseSlope: string; // decimal
  golfCourseYards: string;
  golfCourseParScore: string;
  golfCourseHandicap: string; // decimal
}

export interface GolfCourseProps {
  golfCourses: Array<IGolfCourse>
}

export interface IGolfer {
  golferName: string;
}

export interface GolferProps {
  golfers: Array<IGolfer>;
}
