import Transport from './transport/Transport';
import CarTransport from './transport/vehicles/CarTransport';
import MotorcycleTransport from './transport/vehicles/MotorcycleTransport';

declare var process: NodeJS.Process;

let transport: Transport;

if (process.argv.includes('--uber')) {
  transport = new CarTransport();
} else if (process.argv.includes('--log')) {
  transport = new MotorcycleTransport();
} else {
  console.log('Selecione o tipo de entrega.');
}

if (transport!) {
  transport.startTransport();
}
