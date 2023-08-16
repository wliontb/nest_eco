import { MigrationInterface, QueryRunner } from "typeorm"

export class Hehe1692179213590 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        `CREATE TABLE test`
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
