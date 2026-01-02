-- CreateTable
CREATE TABLE "StockProduct" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "StockProduct_pkey" PRIMARY KEY ("id")
);
