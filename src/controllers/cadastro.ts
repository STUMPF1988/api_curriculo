
import { getConnection } from '../database/connection';

export class CadastroController {

async create(nome: string, telefone: string, email: string) {
await getConnection().manager.query(
   ` INSERT INTO curriculo.cadastro
    (nome, telefone, email)
    values
    ($1, $2, $3)`,
    [nome, telefone, email]
);
}


async list() {
    const cadastro = await getConnection().manager.query(
        "SELECT * FROM curriculo.cadastro"//aqui colocamos a tabela que queremos buscar.
    );

    return cadastro;

}
}

export class ComentarioController {

    async create(nome: string, comentario: string) {
    await getConnection().manager.query(
       ` INSERT INTO curriculo.comentario
        (nome, comentario)
        values
        ($1, $2)`,
        [nome, comentario]
    );
    }
    
    
    async list() {
        const comentario = await getConnection().manager.query(
            "SELECT * FROM curriculo.comentario"//aqui colocamos a tabela que queremos buscar.
        );
    
        return comentario;
    
    }
    }