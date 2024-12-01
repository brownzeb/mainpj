import { useState, useEffect } from "react";
// import { FaUpload } from "react-icons/fa";
import axios from "../../../api/axios";
import { useOutletContext } from "react-router-dom";
// import { useForm } from "react-hook-form";
import ScaleLoader from "react-spinners/ScaleLoader";
import { errorMsg } from "../../../helper/errorMsg";
import useRouteProtect from "../../../hooks/useRouteProtect";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
// import { MarketOverview } from "react-tradingview-embed";
import { MdReplayCircleFilled } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
import { MdOutlineAutoDelete } from "react-icons/md";
import { FaMinusCircle } from "react-icons/fa";
import PropagateLoader from "react-spinners/PropagateLoader";

export default function ActivitiesUi() {
  const [file, setFile] = useState();
  const [successMsg, setSuccessMsg] = useState();
  const [uiData, setUiData] = useState({});
  const [errMsg, setErrMsg] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [isAllowed, setIsAllowed] = useState(false);
  const axiosPrivate = useAxiosPrivate();

  // const { register, handleSubmit } = useForm();

  const { auth } = useOutletContext();

  // console.log(auth);

  useRouteProtect(auth?.accessToken, setIsAllowed);

  // FETCHING USER DATA
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axiosPrivate(`/singleuser/${auth?.id}`);

        // console.log(response);

        if (response?.status != 200) {
          setUiData((p) => ({
            ...p,
            isError: true,
            errMsg: response?.data?.message ?? response?.data,
          }));
        }
        if (!ignore) {
          setUiData((p) => ({ ...p, data: response?.data, isError: false }));
        }
      } catch (error) {
        const err = errorMsg(error);
        setUiData((p) => ({ ...p, errorMsg: err, isError: true }));
      } finally {
        setIsLoading(false);
      }
    };

    let ignore = false;

    fetchData();

    return () => {
      ignore = true;
    };
  }, [uiData?.updateUi]);

  // [uiData?.updateUi];

  const { data: foundUser } = uiData;
  // console.log(uiData);

  const historyData =
    uiData?.data?.foundUser?.txnHistory &&
    uiData?.data?.foundUser?.txnHistory.length != 0
      ? uiData?.data?.foundUser?.txnHistory
      : 0;

  // console.log(historyData);

  const clearHistory = async () => {
    setIsLoading(true);
    try {
      const res = await axiosPrivate.patch(`/deletehistory/${auth?.id}`);
      // console.log(res);
      if (res?.status === 200) {
        setUiData((p) => ({ ...p, isError: false, updateUi: true }));
      }
    } catch (error) {
      const err = errorMsg(error);
      setUiData((p) => ({ ...p, isError: true, errMsg: err }));
    } finally {
      setIsLoading(false);
      setUiData((p) => ({ ...p, isError: false, updateUi: false }));
    }
  };

  const content = (
    <main
      className="w-full min-h-screen   bg-white text-black  flex  flex-col justify-start  items-center pt-3
    "
    >
      <section className="w-[99%]  mx-auto    flex flex-col justify-start  gap-3  items-center ">
        <h2 className="mx-auto  font-black  text-red-500  font-serif tracking-wider text-[1.2rem] ">
          {" "}
          Transaction History
        </h2>
        <button
          onClick={() => {
            clearHistory();
          }}
          className="bg-black  mx-auto px-[2rem] py-2 shadow-inner shadow-gray-200  text-center gap-2  tracking-wide text-white text-[0.8rem] font-serif  flex justify-around  items-center"
        >
          <MdOutlineAutoDelete className="text-[1.8rem]  text-red-500 font-thin " />{" "}
          Wipe History
        </button>
        <div className="  w-full  text-black  flex flex-col justify-center items-center">
          <ul className="w-full    flex flex-col justify-center gap-3 items-center">
            {historyData && historyData != 0 ? (
              historyData.map((data, i) => (
                <li
                  key={i}
                  className="w-[98%] h-[3rem]   border-b-2 border-b-gray-300 m-auto  text-[1.2rem] tracking-wide font-serif   flex justify-center   items-center"
                >
                  <div className="w-[99%]  text-[0.9rem]  text-gray-500 flex justify-around  items-center  mx-auto">
                    {" "}
                    {data?.txnType === "deposit" ? (
                      <FaPlusCircle className="text-[1.8rem] text-green-500" />
                    ) : (
                      <FaMinusCircle className="text-[o.9rem] text-red-500" />
                    )}
                    <span className="capitalize">{data?.txnType}</span>
                    <span>${data?.amount}</span>
                    <span>{data?.date}</span>{" "}
                  </div>
                </li>
              ))
            ) : isLoading ? (
              <PropagateLoader className="text-white  mx-auto text-[1.4rem]" />
            ) : (
              <li className="w-[90%]  mx-auto  flex flex-col justify-center items-center gap-3  text-center">
                <h4>No Activities to show</h4>
                <MdReplayCircleFilled className="text-[2rem]  text-gray-400 " />
              </li>
            )}
          </ul>
        </div>
      </section>
    </main>
  );

  return isAllowed === true && content;

  // return content;
}
