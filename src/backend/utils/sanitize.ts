import { IFormInput } from "@/types";

export const sanitizeGCInput = (gc: IFormInput) => {
  const formattedGCRating = parseInt(Number(gc.golfCourseRating).toFixed(2));
  const formattedGCSlope = parseInt(Number(gc.golfCourseSlope).toFixed(2));
  const formattedGCYards = Number(gc.golfCourseRating);
  const formattedGCParScore = Number(gc.golfCourseRating);
  const formattedGCHandicap = parseInt(Number(gc.golfCourseHandicap).toFixed(2));

  return {
    golfCourseName: gc.golfCourseName,
    golfCourseRating: formattedGCRating,
    golfCourseSlope: formattedGCSlope,
    golfCourseYards: formattedGCYards,
    golfCourseParScore: formattedGCParScore,
    golfCourseHandicap: formattedGCHandicap,
  }
};