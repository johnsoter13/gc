/*
  Warnings:

  - The primary key for the `GolfCourse` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `GolfCourseHandicap` on the `GolfCourse` table. All the data in the column will be lost.
  - You are about to drop the column `GolfCourseId` on the `GolfCourse` table. All the data in the column will be lost.
  - You are about to drop the column `GolfCourseName` on the `GolfCourse` table. All the data in the column will be lost.
  - You are about to drop the column `GolfCourseParScore` on the `GolfCourse` table. All the data in the column will be lost.
  - You are about to drop the column `GolfCourseRating` on the `GolfCourse` table. All the data in the column will be lost.
  - You are about to drop the column `GolfCourseSlope` on the `GolfCourse` table. All the data in the column will be lost.
  - You are about to drop the column `GolfCourseYards` on the `GolfCourse` table. All the data in the column will be lost.
  - Added the required column `golfCourseHandicap` to the `GolfCourse` table without a default value. This is not possible if the table is not empty.
  - The required column `golfCourseId` was added to the `GolfCourse` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `golfCourseName` to the `GolfCourse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `golfCourseParScore` to the `GolfCourse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `golfCourseRating` to the `GolfCourse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `golfCourseSlope` to the `GolfCourse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `golfCourseYards` to the `GolfCourse` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `GolfCourse` DROP PRIMARY KEY,
    DROP COLUMN `GolfCourseHandicap`,
    DROP COLUMN `GolfCourseId`,
    DROP COLUMN `GolfCourseName`,
    DROP COLUMN `GolfCourseParScore`,
    DROP COLUMN `GolfCourseRating`,
    DROP COLUMN `GolfCourseSlope`,
    DROP COLUMN `GolfCourseYards`,
    ADD COLUMN `golfCourseHandicap` DECIMAL(4, 2) NOT NULL,
    ADD COLUMN `golfCourseId` VARCHAR(191) NOT NULL,
    ADD COLUMN `golfCourseName` VARCHAR(191) NOT NULL,
    ADD COLUMN `golfCourseParScore` INTEGER NOT NULL,
    ADD COLUMN `golfCourseRating` DECIMAL(5, 2) NOT NULL,
    ADD COLUMN `golfCourseSlope` DECIMAL(5, 2) NOT NULL,
    ADD COLUMN `golfCourseYards` INTEGER NOT NULL,
    ADD PRIMARY KEY (`golfCourseId`);
