import { Router } from 'express';
import { ChamadoController } from '../controllers/ChamadoController';
const chamadoRouter = Router();

chamadoRouter.post("/createNewChamado", new ChamadoController().index);

chamadoRouter.get("/getAllChamados", new ChamadoController().getAllChamados)

chamadoRouter.get("/deleteChamado/:id", new ChamadoController().dellChamado)
export default chamadoRouter;