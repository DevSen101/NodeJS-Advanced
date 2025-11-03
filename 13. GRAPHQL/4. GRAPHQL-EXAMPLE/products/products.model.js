const products =  [
    {
      id: 'redshoe',
      description: 'Red Shoe',
      price: 50.32,
      reviews: []

    },

    {
      id: 'bluejean',
      description: 'Blue Jean',
      price:55.46,
      reviews: []
    }
   ]

 function getAllProducts(){
  return products;
 }

 function getProductsByPrice(min, max){
   return products.filter((product) => {
   return product.price >=min && product.price <= max
  })
 }

 function getProductsById(id) {
  return products.find((product) => {
   return product.id ===id;
  })
 }

 function addNewProduct(id, description, price) {
  const newProduct = {
   id,
   description,
   price,
   reviews: []
  }
  products.push(newProduct);
  return newProduct
 }

 module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductsById,
  addNewProduct 
 }