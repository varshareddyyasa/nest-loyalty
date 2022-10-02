import {MigrationInterface, QueryRunner} from "typeorm";

export class usedPromotionsTableUpdated1664726163744 implements MigrationInterface {
    name = 'usedPromotionsTableUpdated1664726163744'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "used_promotions" DROP CONSTRAINT "FK_f6ef95d9102c6096c7e4f6bebbb"`);
        await queryRunner.query(`ALTER TABLE "used_promotions" DROP CONSTRAINT "FK_ae42565f3bbc0eee5f4435f788c"`);
        await queryRunner.query(`ALTER TABLE "used_promotions" DROP COLUMN "promotionsUserId"`);
        await queryRunner.query(`ALTER TABLE "used_promotions" DROP COLUMN "promotionsVenorLocationId"`);
        await queryRunner.query(`ALTER TABLE "used_promotions" ADD CONSTRAINT "FK_b3dfb09021a8b7b7bc147797d61" FOREIGN KEY ("promotionId") REFERENCES "promotions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "used_promotions" ADD CONSTRAINT "FK_263d36ece20c181379a7a549ea0" FOREIGN KEY ("vendorLocationId") REFERENCES "vendor_location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "used_promotions" DROP CONSTRAINT "FK_263d36ece20c181379a7a549ea0"`);
        await queryRunner.query(`ALTER TABLE "used_promotions" DROP CONSTRAINT "FK_b3dfb09021a8b7b7bc147797d61"`);
        await queryRunner.query(`ALTER TABLE "used_promotions" ADD "promotionsVenorLocationId" int`);
        await queryRunner.query(`ALTER TABLE "used_promotions" ADD "promotionsUserId" int`);
        await queryRunner.query(`ALTER TABLE "used_promotions" ADD CONSTRAINT "FK_ae42565f3bbc0eee5f4435f788c" FOREIGN KEY ("promotionsUserId") REFERENCES "promotions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "used_promotions" ADD CONSTRAINT "FK_f6ef95d9102c6096c7e4f6bebbb" FOREIGN KEY ("promotionsVenorLocationId") REFERENCES "vendor_location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
