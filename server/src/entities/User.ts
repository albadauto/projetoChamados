import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User{
    @PrimaryGeneratedColumn("increment")
    id: string;

    @Column()
    user:string;

    @Column()
    password:string;
}