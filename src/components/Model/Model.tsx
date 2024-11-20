import React from 'react'

interface ModelProps {
  setOpenModel: React.Dispatch<React.SetStateAction<boolean>>;
  connectWallet: string;
}


const Model: React.FC<ModelProps> = ({ setOpenModel, connectWallet }) => {
  return (
    <div>
      <p>{connectWallet}</p>
      <button onClick={() => setOpenModel(false)}>Close</button>
    </div>
  );
};

export default Model
