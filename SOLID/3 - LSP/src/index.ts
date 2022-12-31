import CreditCard from './CreditCard';
import DebitCard from './DebitCard';
import NubankRewards from './NubankRewards';

// Aqui não importa qual das 3 classes usar, ambas funcionariam normalmente, o princípio da substituição de Liskov diz que uma classe derivada pode ser substituida por uma classe base, é o que acontece aqui, mesmo implementando posteriormente novas funcionalidades o código não quebra.

/* const card = new CreditCard();
const card = new DebitCard();
const card = new NubankRewards();

card.validate();
card.collectPayment() */
