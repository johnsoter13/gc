-- CreateTable
CREATE TABLE `GolfRound` (
    `golfRoundId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `golferId` VARCHAR(191) NOT NULL,
    `golfCourseId` VARCHAR(191) NOT NULL,

    INDEX `GolfRound_golferId_golfCourseId_idx`(`golferId`, `golfCourseId`),
    PRIMARY KEY (`golfRoundId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
