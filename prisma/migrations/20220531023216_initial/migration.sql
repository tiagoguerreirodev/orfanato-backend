/*
  Warnings:

  - You are about to drop the column `orphanageId` on the `Image` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[latitude]` on the table `Orphanage` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[longitude]` on the table `Orphanage` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_orphanageId_fkey";

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "orphanageId";

-- AlterTable
ALTER TABLE "Orphanage" ADD COLUMN     "imageId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Orphanage_latitude_key" ON "Orphanage"("latitude");

-- CreateIndex
CREATE UNIQUE INDEX "Orphanage_longitude_key" ON "Orphanage"("longitude");

-- AddForeignKey
ALTER TABLE "Orphanage" ADD CONSTRAINT "Orphanage_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;
