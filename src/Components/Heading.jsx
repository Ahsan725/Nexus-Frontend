import React from 'react';

function Heading({ text }) {
  return (
    <div className="text-4xl font-extrabold mt-11">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-500">
        {text}
      </span>
    </div>
  );
}

export default Heading;
