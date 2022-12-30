import IDbProduct from './IDbProduct';

export default class MongoDbProduct implements IDbProduct {
  getProductById(productId: number): string {
    return `MongoDb: Exibindo dados do produto ${productId}`;
  }
}
