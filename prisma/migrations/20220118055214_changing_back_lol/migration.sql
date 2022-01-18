/*
  Warnings:

  - You are about to drop the `GolfCourses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GolfRounds` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Golfers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `GolfCourses`;

-- DropTable
DROP TABLE `GolfRounds`;

-- DropTable
DROP TABLE `Golfers`;

-- CreateTable
CREATE TABLE `GolfCourse` (
    `golfCourseId` VARCHAR(191) NOT NULL,
    `golfCourseName` VARCHAR(191) NOT NULL,
    `golfCourseParScore` VARCHAR(191) NOT NULL,
    `golfCourseRating` VARCHAR(191) NOT NULL,
    `golfCourseSlope` VARCHAR(191) NOT NULL,
    `golfCourseYards` VARCHAR(191) NOT NULL,
    `golfCourseTeeBox` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`golfCourseId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Golfer` (
    `golferId` VARCHAR(191) NOT NULL,
    `golferName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`golferId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GolfRound` (
    `golfRoundId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `score` VARCHAR(191) NOT NULL,
    `fairwaysHitFraction` VARCHAR(191) NULL,
    `greensInRegulationFraction` VARCHAR(191) NULL,
    `putts` VARCHAR(191) NULL,
    `golferId` VARCHAR(191) NOT NULL,
    `golfCourseId` VARCHAR(191) NOT NULL,

    INDEX `GolfRound_golferId_idx`(`golferId`),
    INDEX `GolfRound_golfCourseId_idx`(`golfCourseId`),
    PRIMARY KEY (`golfRoundId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
