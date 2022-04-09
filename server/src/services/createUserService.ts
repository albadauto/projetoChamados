import { getRepository } from "typeorm";
import { User } from "../entities/User";

interface userInterface{
    user:string,
    password: string
}
export class createUserService{
    async execute({user, password}: userInterface): Promise<userInterface | Error>{
        try{
            const repo = getRepository(User);
            const userObj = repo.create({user, password});
            await repo.save(userObj);
            return userObj;
        }catch(err){
            return new Error(err);
        }
    }
}