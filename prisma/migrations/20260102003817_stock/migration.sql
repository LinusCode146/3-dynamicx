/*
  Warnings:

  - You are about to drop the `StockProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "StockProduct";

-- CreateTable
CREATE TABLE "Stockproduct" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Stockproduct_pkey" PRIMARY KEY ("id")
);
