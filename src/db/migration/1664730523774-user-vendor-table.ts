import {MigrationInterface, QueryRunner} from "typeorm";

export class userVendorTable1664730523774 implements MigrationInterface {
    name = 'userVendorTable1664730523774'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_vendor" ("id" int NOT NULL IDENTITY(1,1), "userId" int NOT NULL, "vendorId" int NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_bbd22ac26d5c6b50ef77db4f07f" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_2c063539857c83dd17cf37556ea" DEFAULT getdate(), CONSTRAINT "user-vendor-unique-key" UNIQUE ("userId", "vendorId"), CONSTRAINT "PK_d1903fd7460571484e5faac039d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_vendor" ADD CONSTRAINT "FK_21336e0b02f4b23486f73d2b9fa" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_vendor" ADD CONSTRAINT "FK_27194b3ee6496b5021cdf3f0550" FOREIGN KEY ("vendorId") REFERENCES "vendor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_vendor" DROP CONSTRAINT "FK_27194b3ee6496b5021cdf3f0550"`);
        await queryRunner.query(`ALTER TABLE "user_vendor" DROP CONSTRAINT "FK_21336e0b02f4b23486f73d2b9fa"`);
        await queryRunner.query(`DROP TABLE "user_vendor"`);
    }

}
