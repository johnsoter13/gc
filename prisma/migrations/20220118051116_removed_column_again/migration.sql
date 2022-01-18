/*
  Warnings:

  - You are about to drop the column `golfCourseHandicap` on the `GolfCourse` table. All the data in the column will be lost.
  - Added the required column `golfCourseTeeBox` to the `GolfCourse` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `GolfCourse` DROP COLUMN `golfCourseHandicap`,
    ADD COLUMN `golfCourseTeeBox` VARCHAR(191) NOT NULL;
