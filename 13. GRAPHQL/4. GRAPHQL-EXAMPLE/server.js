// Import required modules
const express = require('express')
const { buildSchema } = require('graphql')
const { graphqlHTTP } = require('express-graphql')

// Define GraphQL schema with Query type
const schema = buildSchema(`
 type Query {
    description: String
    price: Float
 }
 `)

// Define root resolver (provides data for schema fields)
const root = {
  description: 'Red Shoe',
  price: 42.12,
}

// Initialize Express app
const app = express()

// Setup GraphQL endpoint middleware
app.use('/graphql', graphqlHTTP({
 schema: schema,     // Attach schema
 rootValue: root,    // Attach resolver
 // graphiql: true   // (Optional) Enable GraphiQL UI
}))

// Start server on port 3000
app.listen(3000, () => {
 console.log('GraphQL Server Running...')
})
