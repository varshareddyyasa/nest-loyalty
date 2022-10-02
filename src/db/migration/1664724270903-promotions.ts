import {MigrationInterface, QueryRunner} from "typeorm";

export class promotions1664724270903 implements MigrationInterface {
    name = 'promotions1664724270903'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "promotions" ("id" int NOT NULL IDENTITY(1,1), "vendorId" int NOT NULL, "pointsNeeded" int NOT NULL, "description" nvarchar(255) NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_8aa50466305f6b082e82f10b229" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_e52f4fecf03e091b8a5f4311f3a" DEFAULT getdate(), CONSTRAINT "PK_380cecbbe3ac11f0e5a7c452c34" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "promotions" ADD CONSTRAINT "FK_f78566ed40c9fc57aa4162f6f70" FOREIGN KEY ("vendorId") REFERENCES "vendor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "promotions" DROP CONSTRAINT "FK_f78566ed40c9fc57aa4162f6f70"`);
        await queryRunner.query(`DROP TABLE "promotions"`);
    }

}
