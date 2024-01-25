-- CreateTable
CREATE TABLE "stocks" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "imageId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "stocks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "forms" (
    "id" SERIAL NOT NULL,
    "sessionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "forms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "investmentDetails" (
    "id" SERIAL NOT NULL,
    "formId" INTEGER,
    "purpose" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "investmentDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "insuranceDetails" (
    "id" SERIAL NOT NULL,
    "formId" INTEGER,
    "mortgage" BOOLEAN NOT NULL,
    "married" BOOLEAN NOT NULL,
    "relationShip" TEXT NOT NULL,
    "multiMillionaire" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "insuranceDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "annuityDetails" (
    "id" SERIAL NOT NULL,
    "formId" INTEGER,
    "longevity" TEXT NOT NULL,
    "ampleLiquidity" TEXT NOT NULL,
    "loaded" TEXT NOT NULL,
    "fiftyYearsOld" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "annuityDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stockDetails" (
    "id" SERIAL NOT NULL,
    "formId" INTEGER,
    "stockId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "stockDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "stocks_id_key" ON "stocks"("id");

-- CreateIndex
CREATE UNIQUE INDEX "forms_id_key" ON "forms"("id");

-- CreateIndex
CREATE UNIQUE INDEX "investmentDetails_id_key" ON "investmentDetails"("id");

-- CreateIndex
CREATE UNIQUE INDEX "investmentDetails_formId_key" ON "investmentDetails"("formId");

-- CreateIndex
CREATE UNIQUE INDEX "insuranceDetails_id_key" ON "insuranceDetails"("id");

-- CreateIndex
CREATE UNIQUE INDEX "insuranceDetails_formId_key" ON "insuranceDetails"("formId");

-- CreateIndex
CREATE UNIQUE INDEX "annuityDetails_id_key" ON "annuityDetails"("id");

-- CreateIndex
CREATE UNIQUE INDEX "annuityDetails_formId_key" ON "annuityDetails"("formId");

-- CreateIndex
CREATE UNIQUE INDEX "stockDetails_id_key" ON "stockDetails"("id");

-- AddForeignKey
ALTER TABLE "investmentDetails" ADD CONSTRAINT "investmentDetails_formId_fkey" FOREIGN KEY ("formId") REFERENCES "forms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "insuranceDetails" ADD CONSTRAINT "insuranceDetails_formId_fkey" FOREIGN KEY ("formId") REFERENCES "forms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "annuityDetails" ADD CONSTRAINT "annuityDetails_formId_fkey" FOREIGN KEY ("formId") REFERENCES "forms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stockDetails" ADD CONSTRAINT "stockDetails_formId_fkey" FOREIGN KEY ("formId") REFERENCES "forms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stockDetails" ADD CONSTRAINT "stockDetails_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "stocks"("id") ON DELETE SET NULL ON UPDATE CASCADE;
