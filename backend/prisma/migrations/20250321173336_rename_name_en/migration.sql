/*
  Warnings:

  - You are about to drop the column `Name_en` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "product" DROP COLUMN "Name_en",
ADD COLUMN     "name_en" TEXT;
