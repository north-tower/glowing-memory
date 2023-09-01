import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import ProductFeed from '@/components/ProductFeed'

import Footer from '../components/Footer'

import Team from '@/components/Team'
import Stats from '@/components/Stats'
import LargeCard from '@/components/LargeCard'
import Services from '@/components/Services'
import Query from '@/components/Query'
import OnProject from '@/components/OnProject'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ projects, cardsData, teamData }) {
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
        <section>
          <h2 className='text-4xl font-semibold py-8 text-center'>Services</h2>

          <div className='flex space-x-3 overflow-scroll scrollbar-none p-3 -ml-3'>
          {cardsData?.map(({img, title , description} )=> (
            <Services key={title} description={description} title={title}  />
          ))}
          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8 text-center'>Our Team</h2>

          <div className='flex space-x-3 overflow-hidden scrollbar-hide p-3 -ml-3'>
          {teamData?.map(({img, title, name} )=> (
            <Team key={img} img={img} title={title}  name={name} />
          ))}
          </div>
        </section>

        
        <section>
          <h2 className='text-4xl font-semibold py-8 text-center'>Projects</h2>

          <div className='flex space-x-3 overflow-scroll scrollbar-none p-3 -ml-3'>
          {projects?.map(({image, title ,description, id} )=> (
            <OnProject key={id} description={description} title={title} image={image}  id={id}  />
          ))}
          </div>
        </section>

        <h3 className='text-3xl m-3 text-center'>Have Any Query</h3>

        <Query />

      </section>

      <Footer />
    </div>
  )
}


export async function getStaticProps() {

  const projects = await fetch("https://www.jsonkeeper.com/b/YFSV").then(
    (res) => res.json()
  );
  const cardsData  = await fetch("https://www.jsonkeeper.com/b/QDW2").then(
    (res) => res.json()
  )
  
  const teamData  = await fetch("https://www.jsonkeeper.com/b/S5NW").then(
    (res) => res.json()
  )
    return {
      props : {
      projects, cardsData, teamData
    },
  };
}