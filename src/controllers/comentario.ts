import { getConnection } from '../database/connection';

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