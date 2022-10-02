import {MigrationInterface, QueryRunner} from "typeorm";

export class user1664677278763 implements MigrationInterface {
    name = 'user1664677278763'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" int NOT NULL IDENTITY(1,1), "firstName" nvarchar(255) NOT NULL, "lastName" nvarchar(255) NOT NULL, "phone" nvarchar(255) NOT NULL, "emailId" nvarchar(255) NOT NULL, "address" nvarchar(255) NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_e11e649824a45d8ed01d597fd93" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_80ca6e6ef65fb9ef34ea8c90f42" DEFAULT getdate(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
