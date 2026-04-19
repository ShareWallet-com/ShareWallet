/*
  Warnings:

  - You are about to drop the column `cretaed_at` on the `EmergencyFundRequest` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `ChatMessage` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `ChatMessage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ChatMessage" ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "EmergencyFundRequest" DROP COLUMN "cretaed_at",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Notification" ALTER COLUMN "is_read" SET DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "ChatMessage_user_id_key" ON "ChatMessage"("user_id");

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
