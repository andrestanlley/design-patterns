import IVehicle from './IVehicle';
import IVehicleMotorcycle from './IVehicleMotorcycle';

export default class Motorcycle implements IVehicleMotorcycle {
  constructor(color: string, year: number, engine: number) {
    this.configureMotorcycle(color, year, engine);
  }
  startVehicle(): void {
    console.log('Ligando os motores.');
  }

  // Explicação na interface IVehicle
  configureCar(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number
  ): void {}

  configureMotorcycle(color: string, year: number, engine: number): void {
    console.log(`Moto da cor ${color}, do ano ${year} com motor de ${engine} `);
    this.startVehicle();
  }
}
