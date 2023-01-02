import ILandVehicle from './interfaces/ILandVehicle';

export default class Motorcycle implements ILandVehicle {
  startRoute(): void {
    this.getCargo();
    console.log('Iniciando o trajeto..');
  }
  getCargo(): void {
    console.log('Já pegamos a encomenda.');
  }
}
