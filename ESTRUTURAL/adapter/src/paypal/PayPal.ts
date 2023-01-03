import Token from '../utils/Token';
import IPaypalPayment from './IPaypalPayment';

export default class PayPal implements IPaypalPayment {
  private token: Token;

  authToken(): Token {
    return new Token();
  }
  paypalPayment(): void {
    this.token = this.authToken();
    console.log('Token: ', this.token.getToken());
    console.log('Enviando pagamentos via Paypal');
  }
  paypalReceive(): void {
    console.log('Recebendo pagamentos via PayPal.');
  }
}
