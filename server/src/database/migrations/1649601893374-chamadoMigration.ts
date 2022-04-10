import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class chamadoMigration1649601893374 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"chamados",
                columns: [
                    {
                        name: "id_chamado",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"nome",
                        type:"varchar"
                    },
                    {
                        name:"date_init",
                        type:"date"
                    },
                    {
                        name:"inst",
                        type:"varchar"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("chamados");
    }

}
