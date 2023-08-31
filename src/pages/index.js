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
import Title from '@/components/Team'
import OnProject from '@/components/OnProject'
import Team from '@/components/Team'
import Stats from '@/components/Stats'
import LargeCard from '@/components/LargeCard'
import Services from '@/components/Services'
import Query from '@/components/Query'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ products, projects }) {
  return (
    <div className='bg-gray-100 '>
      <Head>
        <title>Carlsche Limited</title>
      </Head>
      
      <Header />

      <Banner />

      <section className='max-w-screen-lg mx-auto'>
        <h3 className='text-3xl m-3 text-center'>About Us</h3>
          <Stats />
      </section>
      <LargeCard img="https://links.papareact.com/4cj" 
        title="Lets Make Your Dream House With Our Professionals
        "
        description="Wishlists curated by Carlsche"
        buttonText="Start a project" />

      <section className='max-w-screen-lg mx-auto'>
        <h3 className='text-3xl m-3 text-center'>Our Services</h3>

        <Services />
        <h3 className='text-3xl m-3 text-center'>Our Team</h3>


        <Team />

        
        <h3 className='text-3xl m-3 text-center'>Our Projects</h3>
      
        <ProductFeed products={products} />

        <h3 className='text-3xl m-3 text-center'>Have Any Query</h3>

        <Query />

      </section>

      <Footer />
    </div>
  )
}


