import React from "react";

export const Btn = (props) => {
  const onClick = function (event) {
    {
      props.methodeshow && props.methodeshow(false);
    }
    props.methodSpecialist(props.id);
  };
  return (
    <button
      className={` text-sm  rounded   mt-4 px-3 sm:px-4 ${props.stylee}`}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};
