import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("chamados")
export class Chamados{
    @PrimaryGeneratedColumn("increment")
    id_chamado: string;
    
    @Column()
    nome: string;

    @Column()
    date_init:string;

    @Column()
    inst: string;
}