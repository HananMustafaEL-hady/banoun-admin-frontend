import React from "react";
import { Btn } from "./btn";
import { connect } from "react-redux";
import Modalconnectus from "./Modalconnectus";

import { Deleteconnectus } from "../../redux/actions/connectus";

const Cardconnectus = ({
  email,
  date,
  username,
  message,
  id,
  Deleteconnectus,
}) => {
  return (
    <>
      <div className="bg-white rounded w-9/12 h-44 m-auto mt-10 flex justify-between">
        <div>
          <p className=" text-gray-400 mr-8 mt-4">
            اسم المرسل <span className=" text-black p-5">{username}</span>
          </p>
          <p className=" text-gray-400  mr-7 mt-2">
            الشكوي <span className=" text-black p-10">{message}</span>
          </p>
          <p className=" text-gray-400 mr-8 mt-2">
            {" "}
            عنوان البريد الالكتروني{" "}
            <span className=" text-black p-5">{email}</span>
          </p>
          <p className=" text-gray-400  mr-8 mt-2">
            توقيت الرسالة <span className=" text-black p-5">{date}</span>
          </p>
        </div>

        <div className=" mt-8 flex mr-2">
          <Modalconnectus id={id} />

          <Btn
            stylee=" bg-white border border-silver-tree text-red h-10 ml-5"
            methodSpecialist={Deleteconnectus}
            id={id}
          >
            {" "}
            مسح
          </Btn>
        </div>
      </div>
    </>
  );
};

export default connect(null, { Deleteconnectus })(Cardconnectus);
