export default class Vehicle {
  constructor(
    private color: string,
    private year: number,
    private engine: number,
    private seats: number,
    private doors: number
  ) {}

  // Maneira incorreta! Explicação no index!

  /* car(): void {
      console.log(
        `Criando um carro: ${this.color}, ${this.year}, ${this.engine} potenica, ${this.doors} portas com ${this.seats}`
      );
  
      this.startVehicle();
    }
  
    motorcicle(): void {
      console.log(
        `Criando um carro: ${this.color}, ${this.year}, ${this.engine} potenica, ${this.doors} portas com ${this.seats}`
      );
  
      this.startVehicle();
    }
  
    startVehicle(): void {
      console.log('Ligando os motores.');
    } */
}
