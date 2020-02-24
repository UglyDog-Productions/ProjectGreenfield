import React from 'react';

const Name = ({ name }) => {
  if (name === 'Seller') {
    return (
      <span>
        <b>{name}</b>
      </span>
    );
  }
  return <span>{name}</span>;
};

export default Name;
