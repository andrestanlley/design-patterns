import Engine from '../Components/Engine';
import Transmission from '../Components/Transmission';
import VehicleType from '../Components/VehicleType';
import Wheel from '../Components/Wheel';
import Vehicle from '../products/Vehicle';

export default interface IBuilder {
  reset();
  getVehicle(): Vehicle;
  addWheel(wheel: Wheel): void;
  setVehicleType(value: VehicleType);
  setSeats(seats: number);
  setEngine(engine: Engine)
  setTransmission(transmission: Transmission)
}
