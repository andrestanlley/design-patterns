import Client from './vehicles/client/Client';
import Companys from './vehicles/consts/Company';

const client = new Client(Companys.UBER);

client.startRoute();
