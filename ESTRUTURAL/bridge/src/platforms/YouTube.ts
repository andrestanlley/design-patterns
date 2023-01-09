import IPlatform from './IPlatform';

export default class YouTube implements IPlatform {
  constructor() {
    this.configureRMTP();
    console.log('Youtube: Transmissão foi iniciada.');
  }
  configureRMTP(): void {
    this.authToken();
    console.log('Youtube: Configurando o broadcast');
  }
  authToken(): void {
    console.log('Youtube: Autorizando a aplicação.');
  }
}
