// import React, { useState } from 'react';

// import GameModal from './GameModal';


// const Screenshot = ({ image }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setIsOpen((prev) => !prev);
//   };

//   return (
//     <div onClick={handleClick} className='screenshot__container'>
//       <img
//         src={image}
//         className='screenshot__image'
//       />
//       {isOpen ? <GameModal image={image} /> : null}
//     </div>
//   )
// }

// export default Screenshot;

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import './screenshot.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Screenshot = ({ image }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='screenshot__container'>
      <img onClick={handleOpen} src={image} alt='game image' className='screenshot__image' />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <img src={image} className='screenshot__modal' alt='game image' />
      </Modal>
    </div>
  );
}

export default Screenshot;
