import { getRepository } from "typeorm";
import { User } from "../entities/User";

interface userInterface{
    id?:string,
    user:string,
    password: string
}

export class isValidPassword{
    async execute({user, password}: userInterface): Promise<userInterface | Error>{
        try{
            const repo = getRepository(User);
            const userObj = repo.create({user, password});
            const result = repo.findOne(userObj);

            if (result){
                return result;
            }else{
                return null;
            }
        }catch(err){
            return new Error(err);
        }
    }
}