import React from 'react';
import Client from 'shopify-buy';
import {useState, useEffect} from 'react';
import ProductList from './ProductList';
const client = Client.buildClient({
    storefrontAccessToken: '4e9270255903de9415a904712fba6ecc',
    domain: 'itsnewborn.myshopify.com/'
  });
const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      client.product.fetchAll()
        .then((data) => {
          setProducts(data);
        })
        .catch((error) => {
          console.log(error);
          alert('There was an error fetching the products. Please try again later.');
  
        });
    }, []);
  return (
    <div>
        <ProductList products ={products} />
  </div>
  )
}

export default Products
