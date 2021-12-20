import { Connection, getConnection } from "typeorm";

export class ComentarioController {
  private readonly connection: Connection;

  constructor() {
    this.connection = getConnection();
  }

  async create(nome: string, comentario: string) {
    try {
      await this.connection.query(
        ` INSERT INTO curriculo.comentario
            (nome, comentario)
            values
            ($1, $2)`,
        [nome, comentario]
      );

      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  }

  async list() {
    let result = await this.connection.query(
      "SELECT * FROM curriculo.comentario" //aqui colocamos a tabela que queremos buscar.
    );

    return {
      ok: true,
      data: result,
    };
  }
}
