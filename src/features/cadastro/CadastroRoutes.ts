import {Request, Response, Router} from "express";
import {CadastroController} from "./CadastroController";


const cadastroRoutes = Router();

cadastroRoutes.get("/", async (req: Request, res: Response) =>{
    try {
        const result = await new CadastroController().list();

        return res.status(200).send(result);
    }catch(error){
        return res.status(500).send({
            ok:false,
            error
        });
    }
    
});

cadastroRoutes.post("/", async (req: Request, res: Response) =>{
    try {
        const {nome, telefone, email} = req.body;
        const result = await new CadastroController().create(nome, telefone, email);

        return res.status(200).send(result);
    }catch(error){
        return res.status(500).send({
            ok:false,
            error
        });
    }
    
});

export {cadastroRoutes};