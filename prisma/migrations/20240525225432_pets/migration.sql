/*
  Warnings:

  - Added the required column `name` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pets` ADD COLUMN `name` VARCHAR(32) NOT NULL;
