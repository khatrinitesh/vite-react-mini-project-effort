import React,{createContext,useContext, useEffect, useState} from 'react';
import './style.scss';
import { createPortal } from "react-dom";


export default function ModalBoxesExample() {
  return (
    <>
      <Example/>
    </>
  )
}

function Example(){
    const [modalOpen, setModalOpen] = useState(false);
    const [message, setMessage] = useState("");

    const handleButtonClick = (value) => {
        setModalOpen(false);
        setMessage(value);
      };
    return(
        <>
         <div className="App">
        {message}
        <button className="btn btn-open" onClick={() => setModalOpen(true)}>
            Open
        </button>
        {modalOpen &&
            createPortal(
            <ModalExample
                closeModal={handleButtonClick}
                onSubmit={handleButtonClick}
                onCancel={handleButtonClick}
            >
                <h1>This is a modal</h1>
                <br />
                <p>This is the modal description</p>
            </ModalExample>,
            document.body
            )}
        </div>
        </>
    )
}

function ModalExample({onSubmit,onCancel,closeModal,children}){
    return(
        <div className='modal-container' onClick={(e) => {if(e.target.className === 'modal-container') closeModal("modal was closed");}}>
            <div className='modal'>
                <div className='modal-header' onClick={() => closeModal("modal was closed")}>
                    <p className="close">&times;</p>
                </div>
                <div className='modal-content'>{children}</div>
                <div className='modal-footer'>
                    <button type="submit" className='btn btn-cancel' onClick={() => onSubmit("submit button was clicked")}>Submit</button>
                    <button type="submit" className='btn btn-cancel' onClick={() => onCancel("cancel button was clicked")}>Cancel</button>
                </div>
            </div>
        </div>
    )
}