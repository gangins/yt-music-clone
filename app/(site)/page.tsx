import { sleep } from '@/lib/utils';
import React from 'react';

const page = async () => {
  // await sleep(2000);
  // throw new Error('my error');
  return (
    <div className='min-h-[600px]'>
      page
      <div className='h-[500px] bg-neutral-700'>homepage</div>
      <div className='h-[500px] bg-neutral-700'>homepage</div>
      <div className='h-[500px] bg-neutral-700'>homepage</div>
      <div className='h-[500px] bg-neutral-700'>homepage</div>
    </div>
  );
};

export default page;
