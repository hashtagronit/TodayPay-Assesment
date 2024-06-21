import React from 'react';

const Display = ({ value }) => {
  return (
    <div className="text-right text-2xl font-bold h-16 overflow-hidden">
      {value}
    </div>
  );
};

export default Display;