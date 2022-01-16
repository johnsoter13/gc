import { GolfCourseInput } from "@/types";

export const sanitizeGCInput = (gc: GolfCourseInput) => {
  const formattedGCRating = gc.golfCourseRating;
  const formattedGCSlope = gc.golfCourseSlope;
  const formattedGCYards = gc.golfCourseRating;
  const formattedGCParScore = gc.golfCourseRating;
  const formattedGCHandicap = gc.golfCourseHandicap;

  return {
    golfCourseName: gc.golfCourseName,
    golfCourseRating: formattedGCRating,
    golfCourseSlope: formattedGCSlope,
    golfCourseYards: formattedGCYards,
    golfCourseParScore: formattedGCParScore,
    golfCourseHandicap: formattedGCHandicap,
  }
};