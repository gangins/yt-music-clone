import React from 'react';
import { GridLoader } from 'react-spinners';
const ErrorMessage = () => {
  return (
    <div className='my-20 flex flex-col justify-center items-center gap-4'>
      <GridLoader color='red' />
      <div className='text-[50px]'>sipal</div>
    </div>
  );
};

export default ErrorMessage;
