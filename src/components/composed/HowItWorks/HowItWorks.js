
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
        
            <div className='howItWorks'>
                <h2>How It Works</h2> 
                <p>
                    Bicycle rights irony actually neutra typewriter lyft. 
                    Man bun taxidermy put a bird on it, umami yr ramps pop-up ugh bushwick 
                    chia lo-fi. Occupy bitters pour-over snackwave you probably haven't 
                    heard of them small batch. Cornhole mustache man bun letterpress 
                    echo park VHS.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Link to='/sign-up'>
                    <button>Join !</button> 
                </Link> 
                
            </div>

        </HowItWorksWrapper>
    
    )
}

export default HowItWorks;