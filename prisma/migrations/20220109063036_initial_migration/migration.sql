-- CreateTable
CREATE TABLE `GolfCourse` (
    `golfCourseHandicap` VARCHAR(191) NOT NULL,
    `golfCourseId` VARCHAR(191) NOT NULL,
    `golfCourseName` VARCHAR(191) NOT NULL,
    `golfCourseParScore` VARCHAR(191) NOT NULL,
    `golfCourseRating` VARCHAR(191) NOT NULL,
    `golfCourseSlope` VARCHAR(191) NOT NULL,
    `golfCourseYards` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`golfCourseId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Golfer` (
    `golferId` VARCHAR(191) NOT NULL,
    `golferName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`golferId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
