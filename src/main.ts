import express from "express";

import cors from "cors";
import { initConnection } from "./database/connection";
import { cadastroRoutes } from "./features/cadastro/CadastroRoutes";
import { comentarioRoutes } from "./features/comentario/ComentarioRoutes";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/cadastro", cadastroRoutes);
app.use("/comentario", comentarioRoutes);


initConnection()//como o initConnection é uma promise, temos que colocar o then e o catch.
.then(() => app.listen(process.env.PORT || 8082, () => console.log("Server iniciou")))
.catch((err) => {
    console.log("erro na comunicação com o BD");
    console.log(err);
});

