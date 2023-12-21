import React from 'react';

const Quote = ({ quote, writer }) => {
  return (
    <div className="quote">
      <p>{quote}</p>
      <p className="writer">- {writer}</p>
    </div>
  );
};

export default Quote;
