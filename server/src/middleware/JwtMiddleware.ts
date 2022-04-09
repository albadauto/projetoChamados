import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
export class JwtMiddleware{
    verifyJwt(request: Request, response: Response): Response{
        const token = request.headers['authorization'];
        if (!token) return response.json({error: true});

        jwt.verify(token, process.env.SECRET, (decoded) => {
            if (decoded){
                return response.json({logged:true, error:false});
            }else{
                return response.json({logged:false, error:true});
            }
        })
    }
}