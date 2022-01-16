/*
  Warnings:

  - Added the required column `score` to the `GolfRound` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `GolfRound` ADD COLUMN `score` VARCHAR(191) NOT NULL;
