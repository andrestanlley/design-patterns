import Engine from '../Components/Engine';
import Transmission from '../Components/Transmission';
import VehicleType from '../Components/VehicleType';
import Wheel from '../Components/Wheel';
import Vehicle from '../products/Vehicle';
import IBuilder from './IBuilder';

export default class VehicleBuilder implements IBuilder {
  private vehicle: Vehicle = new Vehicle();

  reset() {
    this.vehicle = new Vehicle();
  }

  getVehicle(): Vehicle {
    const result = this.vehicle;
    this.reset();
    return result;
  }

  addWheel(wheel: Wheel): void {
    this.vehicle.addWheel(wheel);
  }

  setVehicleType(value: VehicleType) {
    this.vehicle.vehicleType = value;
  }

  setSeats(seats: number) {
    this.vehicle.seats = seats;
  }

  setEngine(engine: Engine) {
    this.vehicle.engine = engine;
  }

  setTransmission(transmission: Transmission) {
    this.vehicle.transmission = transmission;
  }
}
