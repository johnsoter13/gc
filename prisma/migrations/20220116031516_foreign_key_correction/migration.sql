/*
  Warnings:

  - The primary key for the `GolfRound` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `golfRoundId` on the `GolfRound` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `GolfRound` DROP PRIMARY KEY,
    DROP COLUMN `golfRoundId`,
    ADD PRIMARY KEY (`golferId`, `golfCourseId`);
