import { Request, Response } from "express";
import { createUserService } from "../services/createUserService";
import { isValidPassword } from "../services/isValidPassword";
import jwt from 'jsonwebtoken';
export class UserController{
    async index(request: Request, response: Response): Promise<Response>{
        try{
            const {user, password} = request.body;
            const service = new createUserService();
            const result = await service.execute({user, password})
            if (result){
                return response.json({result});
            }else{
                return response.json({error: true});
            }
        }catch(err){
            console.log(err);
        }
    }

    async isValidLogin(request: Request, response: Response): Promise<Response>{
        try{
            const {user, password} = request.body;
            const service = new isValidPassword();
            const result = await service.execute({user, password});

            if(result instanceof Error){
                return response.json({error: true});
            }
            if(result){
                const token = jwt.sign({id: result.id}, process.env.SECRET, {expiresIn: 300});
                return response.json({error:false, token, auth:true});
            }else{
                return response.json({error:true, msg: "Usuario ou senha incorreto!"});
            }
                
            
        }catch(err){
            console.log(err)
        }
    }
}