import Middleware from '../middlewares/Middleware';

export default class Server {
  private middleware: Middleware;

  public setMiddleware(middleware: Middleware) {
    this.middleware = middleware;
  }

  login(email: string, password: string): boolean {
    if (this.middleware.check(email, password)) {
      console.log('Usuário autenticado com sucesso.');
      return true;
    }
    return false;
  }
}
