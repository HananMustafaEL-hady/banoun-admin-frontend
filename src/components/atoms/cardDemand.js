import React from "react";
import { Btn } from "./btn";
import ModalDemand from "./modalDemand";
import { connect } from "react-redux";

import { DeleteOneSevent } from "../../redux/actions/event";

const CardDemand = ({ address, date, docName, desc, id, DeleteOneSevent }) => {
  return (
    <>
      <div className="bg-white rounded w-9/12 h-44 m-auto mt-10 flex justify-between">
        <div>
          <p className=" text-gray-400 mr-8 mt-4">
            اسم المستخدم <span className=" text-black p-5">{docName}</span>
          </p>
          <p className=" text-gray-400  mr-7 mt-2">
            التخصص <span className=" text-black p-10">{desc}</span>
          </p>
          <p className=" text-gray-400 mr-8 mt-2">
            {" "}
            عنوان الحدث <span className=" text-black p-5">{address}</span>
          </p>
          <p className=" text-gray-400  mr-8 mt-2">
            توقيت الحدث <span className=" text-black p-5">{date}</span>
          </p>
        </div>

        <div className=" mt-8">
          <ModalDemand eveid={id} />
          <Btn
            stylee=" bg-white border border-silver-tree text-red h-10 ml-5"
            methodSpecialist={DeleteOneSevent}
            id={id}
          >
            {" "}
            رفض
          </Btn>
        </div>
      </div>
    </>
  );
};

export default connect(null, { DeleteOneSevent })(CardDemand);
