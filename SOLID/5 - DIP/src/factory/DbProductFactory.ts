import Db from '../model/Db';
import IDbProduct from '../model/IDbProduct';
import MongoDbProduct from '../model/MongoDbProduct';
import MySQLProduct from '../model/MySQLProduct';

export default class DbProductFactory {
  private static type: Db = Db.MYSQL;

  //  Utilizando dessa maneira não dependemos diretamente de uma modúlo de baixo nível, deixando essa classe encarregada de retornar uma nova instancia do nosso banco de dados

  public static create(): IDbProduct {
    if (DbProductFactory.type === Db.MYSQL) return new MySQLProduct();
    return new MongoDbProduct();
  }
}
