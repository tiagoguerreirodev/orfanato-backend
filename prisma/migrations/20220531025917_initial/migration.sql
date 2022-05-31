/*
  Warnings:

  - You are about to drop the column `imageId` on the `Orphanage` table. All the data in the column will be lost.
  - Added the required column `name` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Orphanage" DROP CONSTRAINT "Orphanage_imageId_fkey";

-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "orphanageId" INTEGER;

-- AlterTable
ALTER TABLE "Orphanage" DROP COLUMN "imageId";

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_orphanageId_fkey" FOREIGN KEY ("orphanageId") REFERENCES "Orphanage"("id") ON DELETE SET NULL ON UPDATE CASCADE;
