import {MigrationInterface, QueryRunner} from "typeorm";

export class usedPromotionsTable1664725946371 implements MigrationInterface {
    name = 'usedPromotionsTable1664725946371'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "used_promotions" ("id" int NOT NULL IDENTITY(1,1), "userId" int NOT NULL, "promotionId" int NOT NULL, "vendorLocationId" int NOT NULL, "Date" datetime NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_1611983da22807e7ee9b96949a0" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_702cc3880990bd5cb3fb6406087" DEFAULT getdate(), "promotionsUserId" int, "promotionsVenorLocationId" int, CONSTRAINT "PK_3944f97a465dd4f827e233e9793" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "used_promotions" ADD CONSTRAINT "FK_d9337f34a82d5b9dabf5985a48d" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "used_promotions" ADD CONSTRAINT "FK_ae42565f3bbc0eee5f4435f788c" FOREIGN KEY ("promotionsUserId") REFERENCES "promotions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "used_promotions" ADD CONSTRAINT "FK_f6ef95d9102c6096c7e4f6bebbb" FOREIGN KEY ("promotionsVenorLocationId") REFERENCES "vendor_location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "used_promotions" DROP CONSTRAINT "FK_f6ef95d9102c6096c7e4f6bebbb"`);
        await queryRunner.query(`ALTER TABLE "used_promotions" DROP CONSTRAINT "FK_ae42565f3bbc0eee5f4435f788c"`);
        await queryRunner.query(`ALTER TABLE "used_promotions" DROP CONSTRAINT "FK_d9337f34a82d5b9dabf5985a48d"`);
        await queryRunner.query(`DROP TABLE "used_promotions"`);
    }

}
