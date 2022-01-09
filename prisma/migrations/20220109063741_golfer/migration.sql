/*
  Warnings:

  - Added the required column `golfRank` to the `Golfer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Golfer` ADD COLUMN `golfRank` VARCHAR(191) NOT NULL;
