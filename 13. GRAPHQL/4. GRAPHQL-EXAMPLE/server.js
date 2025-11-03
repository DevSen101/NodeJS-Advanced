// Import required modules
const express = require('express')
const { buildSchema } = require('graphql')
const { graphqlHTTP } = require('express-graphql')

// Define GraphQL schema with Query type
const schema = buildSchema(`
 type Query {
    products: [Product]
    orders: [Order]
 }
    type Product {
     id: ID!
     description: String!
     reviews: [Review]
     price: Float!
    }

    type Review {
     rating: Int!
     comment: String
    }

    type Order {
     date: String!
     subtotal: Float!
     items: [OrderItem]
    }

    type OrderItem {
     product: Product!
     quantity: Int!
    }
 `)

// Define root resolver (provides data for schema fields)
const root = {
   products: [
    {
      id: 'redshoe',
      description: 'Red Shoe',
      price: 50.32
    },

    {
      id: 'bluejean',
      description: 'Blue Jean',
      price:55.46
    }
   ],
   orders: [
    {
      date: '2025-05-05',
      subtotal: 90.56,
      items: [
        {
          product: {
            id: 'redshoe',
            description: 'Red Shoe',
            price: 50.32
          },
          quantity: 2
        }
      ]
    }
   ]
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
