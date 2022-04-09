import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { JwtMiddleware } from '../middleware/JwtMiddleware';
const userRouter = Router();
const controller = new UserController();
const middleware = new JwtMiddleware();

userRouter.post("/createUser", controller.index);

userRouter.post("/isValidLogin", controller.isValidLogin);

userRouter.get('/teste', middleware.verifyJwt);

export default userRouter;