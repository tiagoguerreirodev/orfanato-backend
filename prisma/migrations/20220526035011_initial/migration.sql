/*
  Warnings:

  - You are about to drop the column `orfanatoId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the `Orfanato` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_orfanatoId_fkey";

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "orfanatoId",
ADD COLUMN     "orphanateId" INTEGER;

-- DropTable
DROP TABLE "Orfanato";

-- CreateTable
CREATE TABLE "Orphanate" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "latitude" DECIMAL(8,6) NOT NULL,
    "longitude" DECIMAL(9,6) NOT NULL,
    "about" TEXT NOT NULL,
    "opening_time" TIMESTAMP(3),
    "open_on_weekends" BOOLEAN NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "imageId" INTEGER NOT NULL,

    CONSTRAINT "Orphanate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_orphanateId_fkey" FOREIGN KEY ("orphanateId") REFERENCES "Orphanate"("id") ON DELETE SET NULL ON UPDATE CASCADE;
