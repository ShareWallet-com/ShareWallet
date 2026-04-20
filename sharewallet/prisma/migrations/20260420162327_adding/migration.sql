/*
  Warnings:

  - A unique constraint covering the columns `[user_id,group_id]` on the table `GroupMembers` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "GroupMembers_group_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "GroupMembers_user_id_group_id_key" ON "GroupMembers"("user_id", "group_id");
