// Import required modules
const path = require('path')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')

const { loadFilesSync } = require('@graphql-tools/load-files')
const { makeExecutableSchema } = require('@graphql-tools/schema')


const typesArray = loadFilesSync('**/*', {
extensions: ['.graphql']  
})

// Define GraphQL schema with Query type
const schema = makeExecutableSchema({
  typeDefs: typesArray
}) 

// Define root resolver (provides data for schema fields)
const root = {
  products: require('./products/products.model'),
  orders: require('./orders/orders.model')
}

// Initialize Express app
const app = express()

// Setup GraphQL endpoint middleware
app.use('/graphql', graphqlHTTP({
 schema: schema,     // Attach schema
 rootValue: root,    // Attach resolver
 graphiql: true   // (Optional) Enable GraphiQL UI
}))

// Start server on port 3000
app.listen(3000, () => {
 console.log('GraphQL Server Running...')
})
