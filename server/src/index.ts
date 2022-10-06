import express from 'express'; // typescript specific
import { ApolloServer } from 'apollo-server-express';
import { schema } from './graphql';

const port = 9000;

// lets create a new apollo server instance
const server = new ApolloServer({ schema });

const app = express();
await server.start();
server.applyMiddleware({ app, path: '/api' }); // this describes the endpoint where our graphql endpoint shall live

app.listen(port);
console.log(`[app]: http://localhost:${port}`);
