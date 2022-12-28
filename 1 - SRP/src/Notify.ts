import Client from './Client';

export default class Notify {
  constructor(private client: Client) {}

  sendEmail(): boolean {
    console.log('Enviando email...');
    this.client.email;
    return true;
  }

  // Além de permitir a reutilização do método  sendEmail, a classe Notify abre caminho para agrupar outros métodos de notificação, como notificações pelo whatsapp por exemplo.
}
