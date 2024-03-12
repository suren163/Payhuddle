import React from 'react'

const Modal = ({isOpen, OnClose, children}) => {
    if(!isOpen) return null;
  return (
    <div className='modal-overlay'>
        <div className='modal-content'>
            <button className='close-btn' onClick={()=>OnClose()}>Close</button>
            {children}
        </div>
    </div>
  )
}

export default Modal