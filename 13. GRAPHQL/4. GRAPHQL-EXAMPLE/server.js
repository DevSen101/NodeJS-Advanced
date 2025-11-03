// Import required modules
const path = require('path')
const express = require('express')

const { graphqlHTTP } = require('express-graphql')
const { loadFilesSync } = require('@graphql-tools/load-files')
const { makeExecutableSchema } = require('@graphql-tools/schema')


const typesArray = loadFilesSync('**/*', {
extensions: ['.graphql']  
})

const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'))

// Define GraphQL schema with Query type
const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArray
}) 

// Initialize Express app
const app = express()

// Setup GraphQL endpoint middleware
app.use('/graphql', graphqlHTTP({
 schema: schema,     // Attach schema
 graphiql: true   // (Optional) Enable GraphiQL UI
}))

// Start server on port 3000
app.listen(3000, () => {
 console.log('GraphQL Server Running...')
})
