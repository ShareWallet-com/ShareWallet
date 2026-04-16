/*
  Warnings:

  - A unique constraint covering the columns `[group_id]` on the table `contributions` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[group_id]` on the table `emergency_fund_requests` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[group_id]` on the table `transactions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `group_id` to the `chat_message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `group_id` to the `contributions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `contributions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `group_id` to the `emergency_fund_requests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `emergency_fund_requests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `request_id` to the `emergency_vote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `emergency_vote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `notifications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `group_id` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "chat_message" ADD COLUMN     "group_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "contributions" ADD COLUMN     "group_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "emergency_fund_requests" ADD COLUMN     "group_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "emergency_vote" ADD COLUMN     "request_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "notifications" ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "transactions" ADD COLUMN     "group_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "contributions_group_id_key" ON "contributions"("group_id");

-- CreateIndex
CREATE UNIQUE INDEX "emergency_fund_requests_group_id_key" ON "emergency_fund_requests"("group_id");

-- CreateIndex
CREATE UNIQUE INDEX "transactions_group_id_key" ON "transactions"("group_id");

-- AddForeignKey
ALTER TABLE "contributions" ADD CONSTRAINT "contributions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contributions" ADD CONSTRAINT "contributions_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emergency_fund_requests" ADD CONSTRAINT "emergency_fund_requests_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emergency_fund_requests" ADD CONSTRAINT "emergency_fund_requests_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emergency_vote" ADD CONSTRAINT "emergency_vote_request_id_fkey" FOREIGN KEY ("request_id") REFERENCES "emergency_fund_requests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emergency_vote" ADD CONSTRAINT "emergency_vote_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_message" ADD CONSTRAINT "chat_message_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;
