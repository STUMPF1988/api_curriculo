import { Connection, getConnection } from "typeorm";

export class CadastroController {
  private readonly connection: Connection;

  constructor() {
    this.connection = getConnection();
  }

  async create(nome: string, telefone: string, email: string) {
    try {
      await this.connection.query(
        ` INSERT INTO curriculo.cadastro
            (nome, telefone, email)
            values
            ($1, $2, $3)`,
        [nome, telefone, email]
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
      "SELECT * FROM curriculo.cadastro" //aqui colocamos a tabela que queremos buscar.
    );

    return {
      ok: true,
      data: result,
    };
  }
}
