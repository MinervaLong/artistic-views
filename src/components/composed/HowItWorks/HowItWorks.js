
import {ImageHIW} from '../../../assets/images'
import { Link } from 'react-router-dom'
import {HowItWorksWrapper} from './HowItWorks.style'

const HowItWorks = () => {
   
    return(
        <HowItWorksWrapper>
            <div>
                <img  
                style={{width:'25rem'}}
                alt='Loupes looking at computer' 
                src={ImageHIW} />

            </div> 
        
            <div >
                <h2>How It Works</h2> 
                <p>Here I explain how it works</p>
                <Link to='/sign-up'>
                    <button>Join</button> 
                </Link> 
                
            </div>

        </HowItWorksWrapper>
    
    )
}

export default HowItWorks;