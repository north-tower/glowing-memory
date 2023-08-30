import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import ProductFeed from '@/components/ProductFeed'
import { getSession } from 'next-auth/react'
import Footer from '../components/Footer'
import Product from '@/components/Product'
import Title from '@/components/Title'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ products }) {
  return (
    <div className='bg-gray-100 '>
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      
      <Header />

      <main className='max-w-screen-lg mx-auto'>
        <Banner />
        <h2 className='z-0'>
        Recent Projects

        </h2>
      
        <ProductFeed products={products} />
      </main>

      <Footer />
    </div>
  )
}


export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch("https://www.jsonkeeper.com/b/KZR6").then(
    (res) => res.json()
  );
    return {
      props : {
      products,session
    },
  };
}
