/*
  Warnings:

  - You are about to drop the column `orphanateId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `imageId` on the `Orphanate` table. All the data in the column will be lost.
  - Added the required column `orphanateID` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_orphanateId_fkey";

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "orphanateId",
ADD COLUMN     "orphanateID" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Orphanate" DROP COLUMN "imageId";
