import React from "react";
import { Btn } from "./btn";
import { connect } from "react-redux";
import {
  GetOneEvent,
  DeleteOneSevent,
  acceptEvent,
} from "../../redux/actions/event";
const ModalDemand = ({
  GetOneEvent,
  event,
  DeleteOneSevent,
  eveid,
  acceptEvent,
}) => {
  const [showModal, setShowModal] = React.useState(false);
  const onClick = function (event) {
    setShowModal(true);
    GetOneEvent(eveid);
  };
  return (
    <>
      <button
        className="bg-silver-tree text-white h-10 ml-5 rounded mt-4 px-3 focus:outline-none"
        type="button"
        onClick={onClick}
      >
        <div className=" text-white ">
          <p>عرض التفاصيل</p>
        </div>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className=" p-5  rounded-t">
                  <button
                    className="p-1  text-black  float-left text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <i className="far fa-times-circle text-black "></i>
                  </button>
                </div>
                {/*body*/}
                <div className=" mr-3">
                  <ul className="text-black text-right py-2 mr-3 text-lg mb-5">
                    <li className="text-gray-400 mt-1">
                      الاسم بالكامل{" "}
                      <span className="text-black p-7">
                        {event?.Specialist?.username}{" "}
                      </span>
                    </li>
                    <li className="text-gray-400 mt-1">
                      {" "}
                      موضوع الحدث{" "}
                      <span className="text-black p-5"> {event?.Topic}</span>
                    </li>
                    <li className="text-gray-400 mt-1">
                      {" "}
                      عنوان الحدث{" "}
                      <span className="text-black p-9">
                        {" "}
                        {event?.Specialization}
                      </span>
                    </li>
                    <li className="text-gray-400 mt-1">
                      {" "}
                      وصف الحدث{" "}
                      <span className="text-black p-8">
                        {event?.description}
                      </span>
                    </li>
                    <li className="text-gray-400 mt-1">
                      {" "}
                      توقيت الحدث{" "}
                      <span className="text-black p-8">
                        {" "}
                        12 مارس الساعه 12:33 ص
                      </span>
                    </li>
                  </ul>
                </div>
                {/*footer*/}

                <div className=" mr-56 mb-4">
                  <Btn
                    stylee=" bg-silver-tree text-white h-10 ml-5"
                    methodeshow={setShowModal}
                    methodSpecialist={acceptEvent}
                    id={eveid}
                  >
                    {" "}
                    تاكيد الحدث
                  </Btn>
                  <Btn
                    stylee=" bg-white border border-silver-tree text-red h-10 ml-5"
                    methodSpecialist={DeleteOneSevent}
                    id={eveid}
                    methodeshow={setShowModal}
                  >
                    {" "}
                    رفض
                  </Btn>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => ({
  event: state.event.event,
});

export default connect(mapStateToProps, {
  GetOneEvent,
  DeleteOneSevent,
  acceptEvent,
})(ModalDemand);
