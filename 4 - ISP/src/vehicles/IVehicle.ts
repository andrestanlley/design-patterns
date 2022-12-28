export default interface IVehicle {
  startVehicle(): void;
  // Essa forma sem segregação acaba gerando métodos inuteis nas classes que implementam essa interface, se ao criar um carro serei obrigado a ter um metodo configureMotorcycle que nunca será usado, esse problema pode ser resolvido fazendo a segregação das interfaces.
  /*
    configureCar(color: string, year: number, engine: number, seats: number, doors: number): void
    configureMotorcycle(color: string, year: number, engine: number): void
    */
}
