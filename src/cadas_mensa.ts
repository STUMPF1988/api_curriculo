class Cadastro {
    constructor(
      public nome: string,
      public telefone: string,
      public email: string,
      public comentario: string
    ) {}
  }
  
  export let cadastroList: Cadastro[] = [];