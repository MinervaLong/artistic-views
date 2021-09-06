import Cover from '../../components/composed/Cover/Cover'
import About from '../../components/composed/About/About'
import HowItWorks from '../../components/composed/HowItWorks/HowItWorks'


import {HomeWrapper} from './Home.style'

const Home = () => {
    return(    
      <HomeWrapper >       
        <Cover />
        <About />
        <HowItWorks />       
      </HomeWrapper>  
    )
}
export default Home;