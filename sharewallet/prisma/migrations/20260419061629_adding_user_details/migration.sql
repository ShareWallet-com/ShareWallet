/*
  Warnings:

  - You are about to drop the column `fullName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNo` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Group_members` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `chat_message` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `contributions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `emergency_fund_requests` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `emergency_vote` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notifications` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `transactions` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Group_members" DROP CONSTRAINT "Group_members_group_id_fkey";

-- DropForeignKey
ALTER TABLE "Group_members" DROP CONSTRAINT "Group_members_user_id_fkey";

-- DropForeignKey
ALTER TABLE "chat_message" DROP CONSTRAINT "chat_message_group_id_fkey";

-- DropForeignKey
ALTER TABLE "contributions" DROP CONSTRAINT "contributions_group_id_fkey";

-- DropForeignKey
ALTER TABLE "contributions" DROP CONSTRAINT "contributions_user_id_fkey";

-- DropForeignKey
ALTER TABLE "emergency_fund_requests" DROP CONSTRAINT "emergency_fund_requests_group_id_fkey";

-- DropForeignKey
ALTER TABLE "emergency_fund_requests" DROP CONSTRAINT "emergency_fund_requests_user_id_fkey";

-- DropForeignKey
ALTER TABLE "emergency_vote" DROP CONSTRAINT "emergency_vote_request_id_fkey";

-- DropForeignKey
ALTER TABLE "emergency_vote" DROP CONSTRAINT "emergency_vote_user_id_fkey";

-- DropForeignKey
ALTER TABLE "notifications" DROP CONSTRAINT "notifications_user_id_fkey";

-- DropForeignKey
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_group_id_fkey";

-- DropForeignKey
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_user_id_fkey";

-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "fullName",
DROP COLUMN "phoneNo",
DROP COLUMN "username";

-- DropTable
DROP TABLE "Group_members";

-- DropTable
DROP TABLE "chat_message";

-- DropTable
DROP TABLE "contributions";

-- DropTable
DROP TABLE "emergency_fund_requests";

-- DropTable
DROP TABLE "emergency_vote";

-- DropTable
DROP TABLE "notifications";

-- DropTable
DROP TABLE "transactions";

-- CreateTable
CREATE TABLE "UserDetails" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "phoneNo" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "UserDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupMembers" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "group_id" TEXT NOT NULL,
    "role" "Group_Role" NOT NULL DEFAULT 'MEMBER',

    CONSTRAINT "GroupMembers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contributions" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "status" "status" NOT NULL DEFAULT 'PENDING',
    "user_id" TEXT NOT NULL,
    "group_id" TEXT NOT NULL,

    CONSTRAINT "Contributions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmergencyFundRequest" (
    "id" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "amount_requested" INTEGER NOT NULL,
    "emergency_status" "emergency_status" NOT NULL DEFAULT 'PENDING',
    "cretaed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    "group_id" TEXT NOT NULL,

    CONSTRAINT "EmergencyFundRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transactions" (
    "id" TEXT NOT NULL,
    "type" "transaction_type" NOT NULL,
    "amount" INTEGER NOT NULL,
    "reference_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "group_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmergencyVote" (
    "id" TEXT NOT NULL,
    "request_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "vote" "vote" NOT NULL,
    "voted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmergencyVote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "is_read" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatMessage" (
    "id" TEXT NOT NULL,
    "group_id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "type" "chat_type" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChatMessage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserDetails_user_id_key" ON "UserDetails"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "GroupMembers_group_id_key" ON "GroupMembers"("group_id");

-- CreateIndex
CREATE UNIQUE INDEX "Contributions_group_id_key" ON "Contributions"("group_id");

-- CreateIndex
CREATE UNIQUE INDEX "EmergencyFundRequest_group_id_key" ON "EmergencyFundRequest"("group_id");

-- CreateIndex
CREATE UNIQUE INDEX "Transactions_group_id_key" ON "Transactions"("group_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "UserDetails" ADD CONSTRAINT "UserDetails_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupMembers" ADD CONSTRAINT "GroupMembers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupMembers" ADD CONSTRAINT "GroupMembers_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contributions" ADD CONSTRAINT "Contributions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contributions" ADD CONSTRAINT "Contributions_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmergencyFundRequest" ADD CONSTRAINT "EmergencyFundRequest_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmergencyFundRequest" ADD CONSTRAINT "EmergencyFundRequest_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmergencyVote" ADD CONSTRAINT "EmergencyVote_request_id_fkey" FOREIGN KEY ("request_id") REFERENCES "EmergencyFundRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmergencyVote" ADD CONSTRAINT "EmergencyVote_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;
