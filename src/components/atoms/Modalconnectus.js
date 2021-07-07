import React, { useEffect } from "react";
import { Btn } from "./btn";
import { connect } from "react-redux";
import { sendconnectus } from "../../redux/actions/connectus";
const Modalconnectus = ({
  id,

  sendconnectus,
}) => {
  const [formData, SetData] = React.useState({
    text: "",
  });
  const { text } = formData;
  const onChange = (e) =>
    SetData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();

    sendconnectus(id, formData);
  };

  const [showModal, setShowModal] = React.useState(false);
  const onClick = function (event) {
    setShowModal(true);
  };

  return (
    <>
      <button
        className=" bg-silver-tree text-white h-10 ml-5 rounded mt-4 px-6 focus:outline-none "
        type="button"
        onClick={onClick}
      >
        <div className=" text-white text-lg ">
          <p> رد</p>
        </div>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-2/4 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5  rounded-t">
                  <p className=" text-xl">ارسال رد</p>
                  <button
                    className="p-1  text-black  float-left text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <i className="far fa-times-circle text-black "></i>
                  </button>
                </div>
                {/*body*/}
                <div className=" mr-3">
                  <form
                    className="text-black text-right py-2 mr-3 text-lg mb-5"
                    onSubmit={(e) => onSubmit(e)}
                  >
                    <input
                      className="text-gray-400 mt-1 border-b-2 border-gray-400 p-3 w-11/12"
                      placeholder="الرد"
                      name="text"
                      value={text}
                      onChange={(e) => onChange(e)}
                    />
                    <div className=" mr-56 mb-4">
                      <button
                        className=" text-sm  rounded    px-3 sm:px-4  bg-silver-tree text-white h-10  mr-16 mt-7"
                        type="submit"
                      >
                        {" "}
                        ارسال
                      </button>
                    </div>
                  </form>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default connect(null, {
  sendconnectus,
})(Modalconnectus);
