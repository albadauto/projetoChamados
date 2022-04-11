import { Request, Response } from "express";
import { createChamadoService } from "../services/createChamadoService";
import { deleteChamadoService } from "../services/deleteChamadoService";
import { findAllChamado } from "../services/findAllChamado";


export class ChamadoController{
    async index(request: Request, response: Response): Promise<void>{
        try{
            const {nome, date_init, inst} = request.body; 
            const service = new createChamadoService();
            const result = await service.execute({nome, inst, date_init});

            if(result){
                response.json({inserted: true, result})
            }else{
                response.json({inserted:false});
            }
        }catch(err){
            console.log(err);
        }
    }

    async getAllChamados(request: Request, response: Response): Promise<void>{
        try{
            const service = new findAllChamado();
            response.json(await service.execute() ?? {});
        }catch(err){
            console.log(err);
        }
    }

    async dellChamado(request:Request, response: Response): Promise<void>{
        try{
            const service = new deleteChamadoService();
            const { id }  = request.params;
            await service.execute(id)
            response.json({isDeleted: true});
        }catch(err){
            console.log(err);
        }
    }
}