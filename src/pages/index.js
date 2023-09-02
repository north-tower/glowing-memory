import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Footer from '../components/Footer'
import Team from '@/components/Team'
import Stats from '@/components/Stats'
import LargeCard from '@/components/LargeCard'
import Services from '@/components/Services'
import Query from '@/components/Query'
import OnProject from '@/components/OnProject'
import Testimonial from '@/components/Testimonial'
import Blog from '@/components/Blog'

export default function Home({ projects, cardsData, teamData, testimonial }) {
  return (
    <div className='bg-gray-100'>
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
          {projects?.map(({image, title ,description, id , rating} )=> (
            <OnProject key={id} description={description} title={title} image={image}  id={id}  rating={rating} />
          ))}
          </div>
        </section>

        <section>
        <h2 className='text-4xl font-semibold py-8 text-center'>Have any query</h2>
        <Query />

        </section>


        <section>
          <h2 className='text-4xl font-semibold py-8 text-center'>Testimonials</h2>

          <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
          {testimonial?.map(({ role,name,description, leading }) => (
          <Testimonial key={name} name={name} role={role} description={description} leading={leading} />
          )     )}
          </div>
        </section>

        <section className='p-2'>
        <h2 className='text-4xl font-semibold py-8 text-center'>From our blog</h2>

        <Blog />

        </section>


      </section>

      <Footer />
    </div>
  )
}


export async function getStaticProps() {

  const projects = await fetch("https://www.jsonkeeper.com/b/NSKN").then(
    (res) => res.json()
  );
  const cardsData  = await fetch("https://www.jsonkeeper.com/b/QDW2").then(
    (res) => res.json()
  )
  
  const teamData  = await fetch("https://www.jsonkeeper.com/b/S5NW").then(
    (res) => res.json()
  )
  const testimonial  = await fetch("https://www.jsonkeeper.com/b/5Z1E").then(
    (res) => res.json()
  )
  
    return {
      props : {
      projects, cardsData, teamData, testimonial
    },
  };
}