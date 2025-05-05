/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- First, add email column with NULL allowed
ALTER TABLE "User" ADD COLUMN "email" TEXT;

-- Set default value for existing users (username + dummy domain)
UPDATE "User" SET "email" = username || '@astreus.ai' WHERE "email" IS NULL;

-- Now make the column required
ALTER TABLE "User" ALTER COLUMN "email" SET NOT NULL;

-- Create unique index
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
