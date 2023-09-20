import Footer from '@/app/components/footer/Footer'
import Navbar from '@/app/components/navbar/Navbar'
import Loader from '../utilities/loader/Loader'
import HeroImage from './components/heroImage/HeroImage'

const Home = () =>  {
  return (
    <>
      <Navbar/>
      <HeroImage/>
      <div className='h-[10vh] flex items-center justify-center'>
        <Loader/>
      </div>
      <Footer/>
    </>
  )
}

export default Home