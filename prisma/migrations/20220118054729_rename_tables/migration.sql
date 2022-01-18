/*
  Warnings:

  - You are about to drop the `GolfCourse` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GolfRound` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Golfer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `GolfCourse`;

-- DropTable
DROP TABLE `GolfRound`;

-- DropTable
DROP TABLE `Golfer`;

-- CreateTable
CREATE TABLE `GolfCourses` (
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
CREATE TABLE `Golfers` (
    `golferId` VARCHAR(191) NOT NULL,
    `golferName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`golferId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GolfRounds` (
    `golfRoundId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `score` VARCHAR(191) NOT NULL,
    `fairwaysHitFraction` VARCHAR(191) NULL,
    `greensInRegulationFraction` VARCHAR(191) NULL,
    `putts` VARCHAR(191) NULL,
    `golferId` VARCHAR(191) NOT NULL,
    `golfCourseId` VARCHAR(191) NOT NULL,

    INDEX `GolfRounds_golferId_idx`(`golferId`),
    INDEX `GolfRounds_golfCourseId_idx`(`golfCourseId`),
    PRIMARY KEY (`golfRoundId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
