import React from 'react'


const ProductList = ({ products }) => {
  // const prod = products.map((product) => {
  //   return {
  //     content: `${product.title} - ${product.description}`,
  //     price: `${product.variants[0].price.amount}`,
  //     img: `${product.images[0].src}`,
  //   }
  // })
  // console.log(prod)

  // const prods = products.map((product) => {
  //   const content = `${product.title} - ${product.description}`
  //   const price = `${product.variants[0].price.amount}`
  //   const img = `${product.images[0].src}`
  //   return (
  //     <li>{  content }</li>
      
  //   )
  // }  
  // )
  // console.log(prods)

  return (
    <>
      {/* <div>
        {products.map((product) => (
          <div key={product.id}>
            <p>{JSON.stringify(product)}</p>
            <h2>{product.title}</h2>
            <img src={product.images[0].src} alt={product.title} />
            <p>{product.description}</p>
            <p>{product.variants[0].price.amount}</p>
          </div>
        ))}
      </div> */}

      {/* <div>
        <p>{JSON.stringify(prod)}</p>
      </div> */}

      <div>

      </div>
    </>


  )
}

export default ProductList
