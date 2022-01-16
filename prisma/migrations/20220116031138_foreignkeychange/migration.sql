-- DropIndex
DROP INDEX `GolfRound_golferId_golfCourseId_idx` ON `GolfRound`;

-- CreateIndex
CREATE INDEX `GolfRound_golferId_idx` ON `GolfRound`(`golferId`);

-- CreateIndex
CREATE INDEX `GolfRound_golfCourseId_idx` ON `GolfRound`(`golfCourseId`);
