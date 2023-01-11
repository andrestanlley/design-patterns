import CheckPermissionMiddleware from './middlewares/CheckPermissionMiddleware';
import CheckUserMiddleware from './middlewares/CheckUserMiddleware';
import Server from './servers/Server';

const server = new Server();

const middleware = new CheckUserMiddleware();
middleware.linkkWith(new CheckPermissionMiddleware());

server.setMiddleware(middleware);

server.login('stanlley41@gmail.com', '123456');
console.log('##########');
server.login('stanlley42@gmail.com', '123456');
console.log('##########');
server.login('stanlley@gmail.com', '123456');
