/*
  Warnings:

  - A unique constraint covering the columns `[uniqueuserCode]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "uniqueuserCode" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_uniqueuserCode_key" ON "User"("uniqueuserCode");
