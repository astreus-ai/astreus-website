/*
  Warnings:

  - You are about to drop the column `category` on the `Plugin` table. All the data in the column will be lost.
  - You are about to drop the column `downloads` on the `Plugin` table. All the data in the column will be lost.
  - You are about to drop the column `icon` on the `Plugin` table. All the data in the column will be lost.
  - You are about to drop the column `repository` on the `Plugin` table. All the data in the column will be lost.
  - You are about to drop the column `stars` on the `Plugin` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `Plugin` table. All the data in the column will be lost.
  - You are about to drop the column `version` on the `Plugin` table. All the data in the column will be lost.
  - You are about to drop the column `website` on the `Plugin` table. All the data in the column will be lost.
  - You are about to drop the `Settings` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `githubUrl` to the `Plugin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Plugin" DROP COLUMN "category",
DROP COLUMN "downloads",
DROP COLUMN "icon",
DROP COLUMN "repository",
DROP COLUMN "stars",
DROP COLUMN "tags",
DROP COLUMN "version",
DROP COLUMN "website",
ADD COLUMN     "docsUrl" TEXT,
ADD COLUMN     "githubUrl" TEXT NOT NULL;

-- DropTable
DROP TABLE "Settings";
