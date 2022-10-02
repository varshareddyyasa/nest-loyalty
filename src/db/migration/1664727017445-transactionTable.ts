import {MigrationInterface, QueryRunner} from "typeorm";

export class transactionTable1664727017445 implements MigrationInterface {
    name = 'transactionTable1664727017445'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "transaction" ("id" int NOT NULL IDENTITY(1,1), "userId" int NOT NULL, "vendorLocationId" int NOT NULL, "purchaseAmount" int NOT NULL, "Date" datetime NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_83cb622ce2d74c56db3e0c29f19" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_253f6b005b632dbac80cff5020c" DEFAULT getdate(), CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "transaction" ADD CONSTRAINT "FK_605baeb040ff0fae995404cea37" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transaction" ADD CONSTRAINT "FK_2753aeaa9367399985733c9817b" FOREIGN KEY ("vendorLocationId") REFERENCES "vendor_location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transaction" DROP CONSTRAINT "FK_2753aeaa9367399985733c9817b"`);
        await queryRunner.query(`ALTER TABLE "transaction" DROP CONSTRAINT "FK_605baeb040ff0fae995404cea37"`);
        await queryRunner.query(`DROP TABLE "transaction"`);
    }

}
