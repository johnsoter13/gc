export interface IGolfCourse {
  golfCourseId: string;
  golfCourseName: string;
  golfCourseRating: string; // decimal
  golfCourseSlope: string; // decimal
  golfCourseYards: string;
  golfCourseParScore: string;
  golfCourseTeeBox: string;
}
export interface IGolfer {
  golferId: string;
  golferName: string;
}

export interface IGolfRound {
  golfRoundId: string;
  createdAt: string | Date;
  golferId: string;
  golfCourseId: string;
  score: string;
  golfCourse: IGolfCourse;
  golfer: IGolfer;
  greensInRegulationFraction: string;
  fairwaysHitFraction: string;
  putts: string;

}

export interface GolfCourseInput {
  golfCourseName: string;
  golfCourseRating: string; // decimal
  golfCourseSlope: string; // decimal
  golfCourseYards: string;
  golfCourseParScore: string;
  golfCourseTeeBox: string;
}
export interface GolferInput {
  golferName: string;
}
export interface GolfRoundInput {
  golfCourseId: string;
  golferId: string;
  score: string;
  fairwaysHit: string;
  fairwaysTotal: string;
  greensInRegulation: string;
  putts: string;
}

export interface GolfCourseProps {
  golfCourses: Array<IGolfCourse>
}
export interface GolferProps {
  golfers: Array<IGolfer>;
}
export interface GolfProps {
  golfers: Array<IGolfer>;
  golfCourses: Array<IGolfCourse>
}

export interface GolfRoundProps {
  golfRounds: Array<IGolfRound>
}

export enum ALERT_TYPES {
  'error',
  'warning',
  'info',
  'success'
}