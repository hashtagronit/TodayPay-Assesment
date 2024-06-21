import React from 'react';

const Button = ({ value, onClick, className }) => {
  return (
    <button
      className={`${className ? className : 'bg-neutral-600'}  py-2 px-4 text-lg font-medium ${className ? '' : 'hover:bg-neutral-700'}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;