import { channel } from 'diagnostics_channel';
import React from 'react';

const page = props => {
  console.log(props);
  return (
    <div>
      channel/[id]
      <div>{props}</div>;
    </div>
  );
};

export default page;
