/*
  Warnings:

  - You are about to drop the column `purchaseId` on the `Product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_purchaseId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "purchaseId";
