
import {AboutImg} from '../../../assets/images'
import {AboutWrapper} from './About.style'

const About = () => {
    return (
        <AboutWrapper>
            <div className='about'>
                <h2>About</h2>
                <p>
                    Bicycle rights irony actually neutra typewriter lyft. 
                    Man bun taxidermy put a bird on it, umami yr ramps pop-up ugh bushwick 
                    chia lo-fi. Occupy bitters pour-over snackwave you probably haven't 
                    heard of them small batch. Cornhole mustache man bun letterpress 
                    echo park VHS.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Bicycle rights irony actually neutra typewriter lyft. 
                    Man bun taxidermy put a bird on it, umami yr ramps pop-up ugh bushwick 
                    chia lo-fi. Occupy bitters pour-over snackwave you probably haven't 
                    heard of them small batch. Cornhole mustache man bun letterpress 
                    echo park VHS.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div>
                <img src={AboutImg}  alt='Lighthouse'/>  
            </div>
        </AboutWrapper>

    )
}

export default About;
