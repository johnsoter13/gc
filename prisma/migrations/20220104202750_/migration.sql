-- CreateTable
CREATE TABLE `GolfCourse` (
    `GolfCourseId` VARCHAR(191) NOT NULL,
    `GolfCourseName` VARCHAR(191) NOT NULL,
    `GolfCourseRating` DECIMAL(5, 2) NOT NULL,
    `GolfCourseSlope` DECIMAL(5, 2) NOT NULL,
    `GolfCourseYards` INTEGER NOT NULL,
    `GolfCourseParScore` INTEGER NOT NULL,
    `GolfCourseHandicap` DECIMAL(4, 2) NOT NULL,

    PRIMARY KEY (`GolfCourseId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
