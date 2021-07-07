import React from "react";

export const ArchiveCardOffline = ({ clientName, date, offline, mobile }) => {
  return (
    <div className=" flex justify-between w-96 h-36 bg-silver-tree-300 rounded">
      <div className=" mr-10 mt-5">
        <img
          src="images/7Lh3ox94e_c.png"
          alt="client pic"
          className=" block w-20 h-20"
        />
        <p className=" mt-2"> {clientName}</p>
      </div>
      <div className=" mt-7 ml-7">
        <p> {date} </p>
        <p className=" text-amber-500">{offline} </p>
        <p>{mobile}</p>
      </div>
    </div>
  );
};
