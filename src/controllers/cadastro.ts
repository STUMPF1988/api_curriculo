
import { getConnection } from '../database/connection';

export class CadastroController {

async create(nome: string, telefone: string, email: string, comentario: string) {
await getConnection().manager.query(
   ` INSERT INTO curriculo.cadastro_comentario
    (nome, telefone, email, comentario)
    values
    ($1, $2, $3, $4)`,
    [nome, telefone, email, comentario]
);
}


async list() {
    const cadastro = await getConnection().manager.query(
        "SELECT * FROM curriculo.cadastro_comentario"//aqui colocamos a tabela que queremos buscar.
    );

    return cadastro;

}
}