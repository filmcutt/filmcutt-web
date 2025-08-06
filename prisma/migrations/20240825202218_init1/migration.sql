/*
  Warnings:

  - Added the required column `projectCategory` to the `Purchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectName` to the `Purchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectType` to the `Purchase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Purchase" ADD COLUMN     "projectCategory" TEXT NOT NULL,
ADD COLUMN     "projectName" TEXT NOT NULL,
ADD COLUMN     "projectType" TEXT NOT NULL;
