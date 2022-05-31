/*
  Warnings:

  - You are about to drop the column `orphanageId` on the `Image` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_orphanageId_fkey";

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "orphanageId";

-- AlterTable
ALTER TABLE "Orphanage" ADD COLUMN     "imageId" INTEGER;

-- AddForeignKey
ALTER TABLE "Orphanage" ADD CONSTRAINT "Orphanage_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;
