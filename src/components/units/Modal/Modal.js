import React from "react";
import reactDom from "react-dom";
import {ModalWrapper} from './Modal.style';

const Modal = ({ isShowing, hide, children }) => isShowing ? reactDom.createPortal(
    <React.Fragment>
        <ModalWrapper>
            <div className='overlay'></div>
            <div className='modalWrapper'>
                <div className='modal'>
                    <div className='modalHeader'>
                        <button type="button" className="closeButton"  onClick={hide}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div>{children}</div>

                </div>
            </div>
        </ModalWrapper>
    </React.Fragment>, document.body

) : null;

export default Modal;