const products =  [
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
   ]

 function getAllProducts(){
  return products;
 }

 module.exports = {
  getAllProducts,
 }