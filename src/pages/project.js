import React from 'react'
import Header from '@/components/Header'
import MediumCard from '@/components/MediumCard'
import Footer from '@/components/Footer'
import OnProject from '@/components/OnProject'


function project({ products }) {
  return (
    
<div>
    <Header />
   
    <section className='max-w-screen-lg mx-auto'>
          <h2 className='text-4xl font-semibold py-8'>All Projects</h2>

          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
          {products?.map(({image, title, id, rating} )=> (
            <OnProject key={image} image={image} title={title} id={id} rating={rating} />
          ))}
          </div>
        </section>
        <Footer />
</div>

  )
}

export default project


export async function getServerSideProps(context) {

  const products = await fetch("https://www.jsonkeeper.com/b/NSKN").then(
    (res) => res.json()
  );
 
    return {
      props : {
      products
    },
  };
}