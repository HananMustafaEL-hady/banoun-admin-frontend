import React, { useEffect } from "react";
import CardDemand from "../atoms/cardDemand";
import CardAccept from "../atoms/cardaccept";
import { connect } from "react-redux";
import { GetAllSpecialist } from "../../redux/actions/specialist";
import { GetEventsPending } from "../../redux/actions/event";
const AdminTabs = ({
  color,
  GetAllSpecialist,
  specialistsPending,
  GetEventsPending,
  eventsPending,
}) => {
  useEffect(() => {
    GetAllSpecialist();
    GetEventsPending();
  }, []);

  const [openTab, setOpenTab] = React.useState(1);
  console.log(eventsPending);
  return (
    <>
      <div className="flex flex-row">
        <div className="w-full flex h-screen">
          <ul
            className="flex  list-none flex-wrap   flex-col w-80 	 bg-silver-tree-200"
            role="tablist"
          >
            <li className="text-6xl text-center text-silver-tree mt-10">
              بنون
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center mt-28">
              <a
                className={
                  " block leading-normal " +
                  (openTab === 1
                    ? "text-silver-tree bg-" + color + "-600"
                    : "text-" + color + "-200 bg-silver-tree-200")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                قبول المختصين
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center -mt-44">
              <a
                className={
                  " block leading-normal " +
                  (openTab === 2
                    ? "text-silver-tree bg-" + color + "-600"
                    : "text-" + color + "-200 bg-silver-tree-200")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                طلبات التحدث
              </a>
            </li>

            <li className="text-silver-tree-500 text-center mb-20 ">
              <a href="#">
                <i className="fas fa-sign-out-alt p-2"></i>تسجيل الخروج
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-alabaster-500 w-full h-screen	 rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  {specialistsPending ? (
                    specialistsPending?.map((item) => (
                      <CardAccept
                        docName={item.username}
                        desc={item.job}
                        imageSource={`https://banoun-app.herokuapp.com/api/upload/show/${item?.image?.filename}`}
                        id={item._id}
                      />
                    ))
                  ) : (
                    <pCardAccept desc="لا يوجد طلبات حتي الان " />
                  )}
                </div>

                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  {eventsPending &&
                    eventsPending?.map((item) => (
                      <CardDemand
                        docName={item?.Specialist?.username}
                        desc={item?.Specialist?.Specialization}
                        address={item?.Specialization}
                        date={item?.Date}
                        id={item._id}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  specialistsPending: state.specialist.specialists,
  eventsPending: state.event.EventsPending,
});

export default connect(mapStateToProps, { GetAllSpecialist, GetEventsPending })(
  AdminTabs
);
