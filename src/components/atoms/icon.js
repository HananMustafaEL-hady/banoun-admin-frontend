import React from 'react';
import { Link } from 'react-router-dom';


export const Icons = ({ icon, to, iconLink }) => {
  return (
    <>
      {icon ? <i className={`${icon} relative right-7 top-3`} ></i> :
        <Link to={to}>
          <i className={`rounded-full text-silver-tree text-lg ${iconLink}`}>
          </i>
        </Link>}
    </>
  );
}

