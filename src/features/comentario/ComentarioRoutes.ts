import {Request, Response, Router} from "express";
import {ComentarioController} from "./ComentarioController";

const comentarioRoutes = Router();

comentarioRoutes.get("/", async (req: Request, res: Response) =>{
    try {
        const result = await new ComentarioController().list();

        return res.status(200).send(result);
    }catch(error){
        return res.status(500).send({
            ok:false,
            error
        });
    }
    
});

comentarioRoutes.post("/", async (req: Request, res: Response) =>{
    try {
        const {nome, comentario} = req.body;
        const result = await new ComentarioController().create(nome, comentario);

        return res.status(200).send(result);
    }catch(error){
        return res.status(500).send({
            ok:false,
            error
        });
    }
    
});

export {comentarioRoutes};