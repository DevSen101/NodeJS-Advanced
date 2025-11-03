const orders =  [
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

function getAllOrders(){
 return orders
}

module.exports = {
 getAllOrders
}