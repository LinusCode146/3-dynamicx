-- CreateTable
CREATE TABLE "Heart" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Heart_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Heart" ADD CONSTRAINT "Heart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
