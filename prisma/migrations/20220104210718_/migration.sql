/*
  Warnings:

  - The primary key for the `GolfCourse` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `golfCourseHandicap` on the `GolfCourse` table. All the data in the column will be lost.
  - You are about to drop the column `golfCourseId` on the `GolfCourse` table. All the data in the column will be lost.
  - You are about to drop the column `golfCourseName` on the `GolfCourse` table. All the data in the column will be lost.
  - You are about to drop the column `golfCourseParScore` on the `GolfCourse` table. All the data in the column will be lost.
  - You are about to drop the column `golfCourseRating` on the `GolfCourse` table. All the data in the column will be lost.
  - You are about to drop the column `golfCourseSlope` on the `GolfCourse` table. All the data in the column will be lost.
  - You are about to drop the column `golfCourseYards` on the `GolfCourse` table. All the data in the column will be lost.
  - Added the required column `GolfCourseHandicap` to the `GolfCourse` table without a default value. This is not possible if the table is not empty.
  - The required column `GolfCourseId` was added to the `GolfCourse` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `GolfCourseName` to the `GolfCourse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `GolfCourseParScore` to the `GolfCourse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `GolfCourseRating` to the `GolfCourse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `GolfCourseSlope` to the `GolfCourse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `GolfCourseYards` to the `GolfCourse` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `GolfCourse` DROP PRIMARY KEY,
    DROP COLUMN `golfCourseHandicap`,
    DROP COLUMN `golfCourseId`,
    DROP COLUMN `golfCourseName`,
    DROP COLUMN `golfCourseParScore`,
    DROP COLUMN `golfCourseRating`,
    DROP COLUMN `golfCourseSlope`,
    DROP COLUMN `golfCourseYards`,
    ADD COLUMN `GolfCourseHandicap` DECIMAL(4, 2) NOT NULL,
    ADD COLUMN `GolfCourseId` VARCHAR(191) NOT NULL,
    ADD COLUMN `GolfCourseName` VARCHAR(191) NOT NULL,
    ADD COLUMN `GolfCourseParScore` INTEGER NOT NULL,
    ADD COLUMN `GolfCourseRating` DECIMAL(5, 2) NOT NULL,
    ADD COLUMN `GolfCourseSlope` DECIMAL(5, 2) NOT NULL,
    ADD COLUMN `GolfCourseYards` INTEGER NOT NULL,
    ADD PRIMARY KEY (`GolfCourseId`);
