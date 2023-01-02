import VehicleBuilder from './builders/VehicleBuilder';
import Director from './director/Director';

const builder = new VehicleBuilder();
const director = new Director(builder);

director.constructSedanCar();

const sedan = builder.getVehicle();
console.log(sedan);

director.constructTruckCar();

const truck = builder.getVehicle();
console.log(truck);
