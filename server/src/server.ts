import express from 'express';
import cors from 'cors';
import './database/index.ts';
import userRouter from './routes/UserRoute';
import chamadoRouter from './routes/ChamadoRoute';
const app = express();

app.use(cors());
app.use(express.json());

//Routes
app.use('/', userRouter);
app.use('/chamados', chamadoRouter);

app.listen(5000, () => console.log("Rodando!"));