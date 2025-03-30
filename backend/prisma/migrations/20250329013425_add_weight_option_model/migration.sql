/*
  Warnings:

  - You are about to drop the column `price` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "product" DROP COLUMN "price",
DROP COLUMN "weight";

-- CreateTable
CREATE TABLE "WeightOption" (
    "id" SERIAL NOT NULL,
    "weight" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "WeightOption_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WeightOption" ADD CONSTRAINT "WeightOption_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
