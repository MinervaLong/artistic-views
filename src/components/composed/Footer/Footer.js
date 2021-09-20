import { twitterIcon, instaIcon, facebIcon } from '../../../assets/icons';
import {FooterWrapper} from './Footer.style'
import {useState} from 'react';
import Modal from '../../units/Modal/Modal';
import PrivacyPolice from '../../../documents/PrivacyPolice';
import TermsOfUse from '../../../documents/TermsOfUse';

const Footer = () => {
    const [isPrivateShowing, setIsPrivateShowing] = useState(false);
    const privateToggle = () => setIsPrivateShowing(!isPrivateShowing);

    const [isTermsShowing, setIsTermsShowing] = useState(false);
    const termsToggle = () => setIsTermsShowing(!isTermsShowing);
    return(
        <FooterWrapper>
            <div className='topFooter'>                
                <button onClick={privateToggle}>Privacy Policy</button>
                    <Modal isShowing={isPrivateShowing} hide={privateToggle}>
                        <h2>Privacy Police</h2>
                        <PrivacyPolice />                    
                    </Modal>               

                <div className='socialMedia'>
                <a target='_blank' rel='noreferrer' href='https://twitter.com' ><img alt='Twitter' src={twitterIcon}/></a>
                <a target='_blank' rel='noreferrer' href='https://www.instagram.com'><img alt='Instagram' src={instaIcon}/></a>
                <a target='_blank' rel='noreferrer' href='https://www.facebook.com/'><img alt='Facebook' src={facebIcon}/></a>
                </div>

                <button onClick={termsToggle}>Terms of Use</button>
                <Modal isShowing={isTermsShowing} hide={termsToggle}>
                    <h2>Terms of Use</h2>
                    <TermsOfUse />                
                </Modal>             
            </div>
            <div className='bottomFooter'><p>©️Artistic Views 2021</p></div> 
        </FooterWrapper>         
    )
}
export default Footer;