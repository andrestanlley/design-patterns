import IVehicle from './interfaces/IVehicle';

export default class Motocycle implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log('Iniciando a entrega...');
  }
  getCargo(): void {
    console.log('Já pegamos a encomenda.');
  }
}
