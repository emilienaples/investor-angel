-- CreateTable
CREATE TABLE "debtDetails" (
    "id" SERIAL NOT NULL,
    "formId" INTEGER,
    "ccDebt" TEXT NOT NULL,
    "marginDebt" TEXT NOT NULL,
    "autoDebt" TEXT NOT NULL,
    "studentDebt" TEXT NOT NULL,
    "mortgageDebt" TEXT NOT NULL,
    "otherDebt" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "debtDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "debtDetails_id_key" ON "debtDetails"("id");

-- CreateIndex
CREATE UNIQUE INDEX "debtDetails_formId_key" ON "debtDetails"("formId");

-- AddForeignKey
ALTER TABLE "debtDetails" ADD CONSTRAINT "debtDetails_formId_fkey" FOREIGN KEY ("formId") REFERENCES "forms"("id") ON DELETE SET NULL ON UPDATE CASCADE;
