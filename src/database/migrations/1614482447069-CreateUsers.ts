import {MigrationInterface, QueryRunner, Table} from "typeorm";

// Para rodar uma migration: yarn typeorm migration:run

export class CreateUsers1614482447069 implements MigrationInterface {
    // Quando quero dar um up na migration uso esse método.
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    // Quando quero remover uma migration uso esse método.
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
