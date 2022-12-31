export default class Client {
  email: string;

  create(): void {}

  read(): void {}

  update(): void {}

  delete(): void {}

  // O método sendEmail não deveria pertencer ao cliente! Imaginando cenários futuros onde podemos reutilizar esse método para envio de emails internos ou para fornecedores, manter dentro do cliente geraria uma repetição de código desnecessário.
}
