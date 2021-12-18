import { Request, Response, Router } from "express";
//import { cadastroList } from "./cadas_mensa";

const routes = Router();



/*
//post - criar um recado
routes.post("/", (request: Request, response: Response) => {

  const { nome, telefone, email, comentario } = request.body;
   
  const newCadastro = { nome, telefone, email, comentario };
  cadastroList.push(newCadastro);
  
    return response.json(newCadastro);

});

*/


/*get
routes.get("/recado", (_, response: Response) => {
  return response.json(cadastroList);
});
*/



export default routes;