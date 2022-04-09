import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class userMigration1649507267834 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary:true
                    },
                    {
                        name: "user",
                        type:"varchar"
                    },
                    {
                        name:"password",
                        type:"varchar"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
