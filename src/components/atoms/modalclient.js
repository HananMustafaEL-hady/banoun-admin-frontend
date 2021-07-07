import React from "react";
import { ClientArchive } from "./clientArchive";

export const ModalClient = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button className=" " type="button" onClick={() => setShowModal(true)}>
        <div className=" w-20 h-20  mt-9 ">
          <a href="#">
            <img src="images/7Lh3ox94e_c.png" alt="client pic" />
            <p className=" text-sm text-center mt-1">ابتسام البسيوني</p>
          </a>
        </div>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-red rounded-t">
                  <h3 className=" text-xl">سجل العميل</h3>
                  <button
                    className="  border-0 text-black  float-left text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <i className="far fa-times-circle text-black "></i>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <ClientArchive />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
