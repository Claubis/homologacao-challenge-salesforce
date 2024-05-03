
import HomePage from '../components/Home'
import DetailsCompany from '../components/DetailsCompany'
import About from '../components/About'
import AboutService from '../components/AboutService'
import AboutSalesForce from '../components/AboutSalesForce'
import ModalLogin from '../components/ModalLogin'
import AboutForms from '../components/AboutForms'
// import InfiniteMovingCardsDemo from './CarroselPartner'

export default function Home() {
  return (
    <div>
      
      <ModalLogin/>
      <HomePage />  
      <DetailsCompany/>
      <About />
      <AboutService />
      <AboutSalesForce/>
      <AboutForms/>
      {/*<InfiniteMovingCardsDemo/> */}

    </div>
  )
}
