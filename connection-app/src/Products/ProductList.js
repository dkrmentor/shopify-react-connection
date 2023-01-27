import React from 'react'

const ProductList = ({products}) => {
  return (
    <div>
    {products.map((product) => (
      <div key={product.id}>
        <p>{JSON.stringify(product)}</p>
        {/* <h2>{product.title}</h2>
        <img src={product.images[0].src} alt={product.title} />
        <p>{product.description}</p> */}
      </div>
    ))}
  </div>
  )
}

export default ProductList
