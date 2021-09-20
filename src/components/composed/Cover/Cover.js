/* eslint-disable jsx-a11y/alt-text */

import {CoverImg} from '../../../assets/images'
import { CoverWrapper } from './Cover.style';

const Cover = () => {
    return(
      
        <CoverWrapper>
            <div className='overlay'>
                <img a1t='Logo and slogan' src={CoverImg}  />
                <p>Eating with Art</p>
            </div>
        </CoverWrapper> 
    )}

export default Cover;