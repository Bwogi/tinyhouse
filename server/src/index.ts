import express from 'express'; // typescript specific
import { ApolloServer } from 'apollo-server-express';

const app = express();
const port = 9000;

// lets create a new apollo server instance
const server = new ApolloServer();
server.applyMiddleware({ app, path: '/api' }); // this describes the endpoint where our graphql endpoint shall live

app.listen(port);
console.log(`[app]: http://localhost:${port}`);
