import React from 'react'
import Product from './Product';


export default function productFeed({ products }) {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:-mt-52 mx-auto'>    
        {products.
        map(({ id, title, price, description , category, image}) =>(
            <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
            />
        )
        )}


      
    </div>
  );
}

