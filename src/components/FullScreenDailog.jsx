import React from 'react'
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import {IoCloseSharp} from "react-icons/io5";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});




const Project = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div>
     <button className="w-28 h-10 font-normal rounded-lg text-gray-100 bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 duration-300  hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 " onClick={handleClickOpen}>
              {" "}
              Apply now
    </button>
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      className='mt-20'
    >
    <div className='w-full bg-gradient-to-b from-black to-gray-800  text-white'>
        <div className="bg-black md:px-20 flex justify-between">
            <p className='text-3xl cursor-pointer font-signature'></p>
            <p className='text-2xl cursor-pointer text-white' onClick={handleClose}><IoCloseSharp /></p>
        </div>
        <div className='bg-gradient-to-t from-gray-800 to-black h-16 p-4 px-10 md:px-20 flex justify-between min-h-screen'></div>
        

    </div>

    </Dialog>
  </div>
  )
}
export default Project;
