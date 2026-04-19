/*
  Warnings:

  - Added the required column `getVerificiationToken` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `verfiyToken` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `verifyTokenExpire` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "getVerificiationToken" TEXT NOT NULL,
ADD COLUMN     "verfiyToken" TEXT NOT NULL,
ADD COLUMN     "verifyTokenExpire" TIMESTAMP(3) NOT NULL;
