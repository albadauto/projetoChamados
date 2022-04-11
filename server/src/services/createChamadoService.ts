import { getRepository } from "typeorm";
import { Chamados } from "../entities/Chamados";

interface chamadoInterface{
    nome: string;
    inst: string,
    date_init:string
}


export class createChamadoService{
    async execute({nome, inst, date_init}: chamadoInterface): Promise<chamadoInterface>{
        try{
            const repo = getRepository(Chamados);
            const chamadoObj = repo.create({nome, inst, date_init});
            await repo.save(chamadoObj);
            return chamadoObj;
        }catch(err){
            console.log(err);
        }
    }
}