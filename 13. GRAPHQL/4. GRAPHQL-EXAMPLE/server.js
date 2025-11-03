// Import required modules
const path = require('path')
const express = require('express')

const { ApolloServer } = require('apollo-server-express')
const { loadFilesSync } = require('@graphql-tools/load-files')
const { makeExecutableSchema } = require('@graphql-tools/schema')


const typesArray = loadFilesSync('**/*', {
extensions: ['.graphql']  
})
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'))

async function startApolloServer() {
 // Initialize Express app
const app = express()

// Define GraphQL schema with Query type
const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArray
})

const server = new ApolloServer({
  schema
})

await server.start();
server.applyMiddleware({ app, path: '/graphql'})

// Start server on port 3000
app.listen(3000, () => {
 console.log('GraphQL Server Running...')
 })
}

startApolloServer();

 





