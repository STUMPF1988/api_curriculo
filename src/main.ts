import express from "express";
//import routes from "./routes";
import cors from "cors";
import { initConnection } from "./database/connection";
import { CadastroController } from "./controllers/cadastro";


const app = express();
app.use(express.json());
app.use(cors());

//app.use(routes);

app.get("/", async (req, res) =>{
try{
    const cadastro = await new CadastroController().list();

return res.send({
    message: "it is ok",
    data: cadastro,
    count: cadastro.length,
});

}catch (err) {
    return res.status(500).send({
        message: "O cadastro não foi encontrado, desculpe!",
        err
    })
}
});

app.post("/", async (req, res) =>{
    try{
        let {nome, telefone, email, comentario} = req.body;

        await new CadastroController().create(nome, telefone, email, comentario);
    
    return res.send({
        message: "it is ok",
    });
    
    }catch (err) {
        return res.status(500).send({
            message: "O cadastro não pode ser efetuado, desculpe!",
            err
        })
    }
    });



initConnection()//como o initConnection é uma promise, temos que colocar o then e o catch.
.then(() => app.listen(process.env.PORT || 8082, () => console.log("Server iniciou")))
.catch((err) => {
    console.log("erro na comunicação com o BD");
    console.log(err);
});

