import PayonnerAdapter from './adapters/PayonnerAdapter';
import IPayonnerPayment from './payonner/IPayonnerPayment';
import Payonner from './payonner/Payonner';
import IPaypalPayment from './paypal/IPaypalPayment';
import PayPal from './paypal/PayPal';

let payment: IPaypalPayment;

payment = new PayPal();

payment.paypalPayment();
payment.paypalReceive();

payment = new PayonnerAdapter(new Payonner());

payment.paypalPayment();
payment.paypalReceive();
