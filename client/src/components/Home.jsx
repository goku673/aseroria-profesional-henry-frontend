import ContactForm from '../views/contact/ContactForm';
import Hero from './Hero';
import Services from './Services';
import Footer from './footer/Footer';


const Home = () => {

  return (
    <div className='flex flex-col w-full'>
      <Hero />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Home