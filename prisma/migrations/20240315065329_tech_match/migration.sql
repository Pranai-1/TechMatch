-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "languages" TEXT[],
    "likes" INTEGER[]
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
