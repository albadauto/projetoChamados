import { getRepository } from "typeorm";
import { Chamados } from "../entities/Chamados";

export class deleteChamadoService{
    async execute(id:string){
        try{
            const repo = getRepository(Chamados);
            await repo.delete(id);
        }catch(err){
            console.log(err);
        }
    }
}