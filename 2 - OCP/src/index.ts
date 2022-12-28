import TypeVehicle from './TypeVehicle';
import Vehicle from './vehicles/Vehicle';

const type = TypeVehicle.CAR;
let vehicle: Vehicle;

// Com essa implementação abaixo, desrespeitamos o princípio do Open/Closed, acabamos trazendo um erro onde temos que passar informações desnecessárias para criar uma moto, poderiamos deixar os dados que não se aplicam para a moto como anulaveis, porém isso geraria outros erros como permitir a criação de um carro sem passar todas as caracteristicas, uma sequencia de problemas criados pela má execução desse princípio.

/* if (type === TypeVehicle.CAR) {
  vehicle = new Vehicle('Amarelo', 2022, 2.0, 4, 4);
  vehicle.car();
} else if(type === TypeVehicle.MOTORCYCLE){
    vehicle = new Vehicle('Amarelo', 2022, 2.0)
    vehicle.motorcicle
} */
