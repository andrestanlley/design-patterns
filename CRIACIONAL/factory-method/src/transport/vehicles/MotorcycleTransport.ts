import Transport from '../Transport';
import IVehicle from './interfaces/IVehicle';
import Motocycle from './Motocycle';

export default class MotorcycleTransport extends Transport {
  protected createTransport(): IVehicle {
    return new Motocycle();
  }
}
