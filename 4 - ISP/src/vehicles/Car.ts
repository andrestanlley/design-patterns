import IVehicle from './IVehicle';
import IVehicleCar from './IVehicleCar';

export default class Car implements IVehicleCar {
  constructor(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number
  ) {
    this.configureCar(color, year, engine, seats, doors);
  }
  startVehicle(): void {
    console.log('Ligando os motores.');
  }
  configureCar(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number
  ): void {
    console.log(
      `Carro da cor ${color}, do ano ${year} com motor de ${engine} e com ${seats} lugares e ${doors} portas`
    );
    this.startVehicle();
  }

  // Explicação na interface IVehicle
//   configureMotorcycle(color: string, year: number, engine: number): void {
//     throw new Error('Method not implemented.');
//   }
}
