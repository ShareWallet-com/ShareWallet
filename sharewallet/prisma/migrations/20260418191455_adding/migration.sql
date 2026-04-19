/*
  Warnings:

  - You are about to drop the column `getVerificiationToken` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `verfiyToken` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `verifyTokenExpire` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "getVerificiationToken",
DROP COLUMN "verfiyToken",
DROP COLUMN "verifyTokenExpire";
