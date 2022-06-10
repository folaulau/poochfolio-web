import React from 'react';

const Button = ({ text }) => {
  return (
    <button className="bg-[#95e8f7] rounded-full text-[#077997] py-7 px-14 text-xl uppercase mt-12">
      {text}
    </button>
  );
};

export default Button;
