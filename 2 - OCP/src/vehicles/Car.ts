import IVehicleCar from "./IVehicleCar";

export default class Car implements IVehicleCar {
    startVehicle(): void {
        console.log('Ligando os motores.')
    }
    configure(color: string, year: number, engine: number, seats: number, doors: number): void {
        console.log(
            `Criando um carro: ${color}, ${year}, ${engine} potenica, ${doors} portas com ${seats}`
          );
    }

}