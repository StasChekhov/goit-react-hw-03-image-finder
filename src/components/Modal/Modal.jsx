import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', e => {
            if (e.code === 'Escape') {
                this.props.onClose()
            }
        })
    }
    overlayClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose()
        }
    }
    
    render() { 
        return createPortal(
            <div className={s.overlay} onClick={this.overlayClick}>
                <div className={s.module}>
                    <img  src={this.props.image} alt="" />
                </div>
            </div>,
            modalRoot,
        );
    }
}
 
export default Modal;