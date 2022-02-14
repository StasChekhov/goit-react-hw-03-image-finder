import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css'
import PropTypes from "prop-types";

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.escapeFunction)
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.escapeFunction)
    }
    
    escapeFunction = e => {
        if (e.code === 'Escape') {
            this.props.onClose()
        }
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

Modal.propTypes = {
  image: PropTypes.string,
  
};
