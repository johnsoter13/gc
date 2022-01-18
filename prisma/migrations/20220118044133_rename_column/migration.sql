/*
  Warnings:

  - You are about to drop the column `farwayHitFraction` on the `GolfRound` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `GolfRound` DROP COLUMN `farwayHitFraction`,
    ADD COLUMN `fairwaysHitFraction` VARCHAR(191) NULL;
