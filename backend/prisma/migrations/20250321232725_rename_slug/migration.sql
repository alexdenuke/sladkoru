/*
  Warnings:

  - You are about to drop the column `name_en` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "product" DROP COLUMN "name_en",
ADD COLUMN     "slug" TEXT;
