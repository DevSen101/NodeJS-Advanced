// ✅ Import required modules
const path = require('path')
const express = require('express')

const { ApolloServer } = require('apollo-server-express') // Apollo server for Express
const { loadFilesSync } = require('@graphql-tools/load-files') // Load .graphql & resolver files
const { makeExecutableSchema } = require('@graphql-tools/schema') // Combine typeDefs & resolvers

// ✅ Load schema and resolvers from files
const typesArray = loadFilesSync('**/*', {
  extensions: ['.graphql'] // Load all .graphql schema files
})
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js')) // Load all resolvers

// ✅ Start Apollo Server (async function)
async function startApolloServer() {
  const app = express() // Initialize Express app

  // Create executable GraphQL schema
  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray
  })

  // Create Apollo Server with schema
  const server = new ApolloServer({ schema })

  await server.start() // Start Apollo Server
  server.applyMiddleware({ app, path: '/graphql' }) // Apply middleware at /graphql endpoint

  // Start Express server
  app.listen(3000, () => {
    console.log('🚀 GraphQL Server Running on http://localhost:3000/graphql')
  })
}

// ✅ Call server start function
startApolloServer()
