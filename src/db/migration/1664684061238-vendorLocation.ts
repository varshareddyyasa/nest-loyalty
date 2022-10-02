import {MigrationInterface, QueryRunner} from "typeorm";

export class vendorLocation1664684061238 implements MigrationInterface {
    name = 'vendorLocation1664684061238'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vendor_location" ("id" int NOT NULL IDENTITY(1,1), "vendorId" int NOT NULL, "address" nvarchar(255) NOT NULL, "phone" nvarchar(255) NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_74f15939752eb2e47c7328de685" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_cfb1446d3e8273d064671c59a10" DEFAULT getdate(), CONSTRAINT "PK_97bb3a124fc8c9afa05565c25ad" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vendor_location" ADD CONSTRAINT "FK_4f18af334b9e92d27b673c83369" FOREIGN KEY ("vendorId") REFERENCES "vendor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendor_location" DROP CONSTRAINT "FK_4f18af334b9e92d27b673c83369"`);
        await queryRunner.query(`DROP TABLE "vendor_location"`);
    }

}
