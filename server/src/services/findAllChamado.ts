import { getRepository } from "typeorm";
import { Chamados } from "../entities/Chamados";

export class findAllChamado{
    async execute(){
        try{
            const repo = getRepository(Chamados);
            const chamadosObj = await repo.find();
            return chamadosObj;      
        }catch(err){
            console.log(err);
        }
    }
}