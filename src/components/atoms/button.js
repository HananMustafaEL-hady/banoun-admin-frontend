import React from 'react';


export const Button = (props) => {
  return (
    <button className={`transparent rounded w-28 h-8 md:w-32 md:h-9 lg:w-40 lg:h-10 
          ${props.stylee}`} type='submit'>
      {props.children}
    </button>
  );
}
