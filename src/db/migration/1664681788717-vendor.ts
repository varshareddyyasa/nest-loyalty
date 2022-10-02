import {MigrationInterface, QueryRunner} from "typeorm";

export class vendor1664681788717 implements MigrationInterface {
    name = 'vendor1664681788717'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vendor" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "pointsEarningRatio" int NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_9ed530b4e0563ff7de28a8dad6a" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_a3f605b6b7d61bd950592eec4f7" DEFAULT getdate(), CONSTRAINT "PK_931a23f6231a57604f5a0e32780" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "vendor"`);
    }

}
