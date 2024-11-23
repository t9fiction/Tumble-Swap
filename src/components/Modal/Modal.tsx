import React from 'react'

interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  connectWallet: string;
}


const Modal: React.FC<ModalProps> = ({ setOpenModal, connectWallet }) => {
  return (
    <div>
      <p>{connectWallet}</p>
      <button onClick={() => setOpenModal(false)}>Close</button>
    </div>
  );
};

export default Modal