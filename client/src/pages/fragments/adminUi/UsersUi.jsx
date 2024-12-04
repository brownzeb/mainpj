import { useState, useEffect } from "react";
// import { FaUpload } from "react-icons/fa";
import axios from "../../../api/axios";
import { useOutletContext, Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
import ScaleLoader from "react-spinners/ScaleLoader";
import { errorMsg } from "../../../helper/errorMsg";
import useRouteProtect from "../../../hooks/useRouteProtect";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
// import { MarketOverview } from "react-tradingview-embed";
import { MdReplayCircleFilled } from "react-icons/md";

export default function UsersUi() {
  const [file, setFile] = useState();
  const [successMsg, setSuccessMsg] = useState();
  const [errMsg, setErrMsg] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isAllowed, setIsAllowed] = useState(false);
  const [reload, setReload] = useState(false);
  const [serverData, setServerData] = useState();
  const axiosPrivate = useAxiosPrivate();
  // const { register, handleSubmit } = useForm();

  const { auth, setAuth } = useOutletContext();

  // console.log(auth?.id);

  useRouteProtect(auth?.accessToken, setIsAllowed);

  // const upload = async (e) => {
  //   e.preventDefault();
  //   try {
  //     setIsLoading(true);
  //     const formData = new FormData();
  //     formData.append("file", file);
  //     const res = axiosPrivate.post(
  //       `/upload`,
  //       formData,

  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //           "Access-Control-Allow-Credentials": true,
  //           withCredentials: true,
  //         },
  //       }
  //     );
  //     const serverRes = await res;
  //     console.log(serverRes);
  //     if (serverRes?.status > 201) {
  //       setErrMsg(
  //         serverRes?.data?.message ? serverRes?.data?.message : serverRes?.data
  //       );
  //     }
  //     if (serverRes.status === 201) {
  //       setSuccessMsg(serverRes?.data?.message);
  //     }
  //     // console.log(data);
  //   } catch (error) {
  //     const err = errorMsg(error);
  //     console.log(err);
  //     setErrMsg(err);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axiosPrivate.get("/allusers");

        // console.log(response);

        if (response?.status != 200) {
          setErrMsg(
            response?.data?.message ? response?.data?.message : response?.data
          );
        }

        ignore === true && setServerData(response?.data);
      } catch (error) {
        const err = errorMsg(error);
        setErrMsg(err);
      } finally {
        setIsLoading(false);
        setReload(false);
      }
    };

    let ignore = false;
    fetchData();

    return () => {
      ignore = true;
    };
  }, [reload]);

  // console.log(serverData);

  const usersList =
    serverData?.allUsers && serverData?.allUsers.length != 0
      ? serverData?.allUsers
      : 0;

  // console.log(usersList);
  const content = (
    <main className="w-full h-full min-h-screen   bg-white  text-black flex  flex-col justify-start items-center">
      <section className="w-[90%]  mx-auto    flex  flex-col   justify-center items-center ">
        <h2
          className="font-black my-4 text-[1.4rem] text-red-500  mx-auto "
          style={{ textShadow: "2px 2px gray" }}
        >
          Users
        </h2>
        <ol className="w-[98%]  mx-auto  list-decimal   flex  gap-3 flex-col justify-around  items-center">
          {usersList && usersList != 0 ? (
            usersList.map((data) => (
              <li
                key={data?._id}
                className="w-full h-[2.5rem] border-b-2 border-b-gray-400  "
              >
                <Link
                  to={`singleuser/${data?._id}`}
                  className="w-full  block  min-h-full my-auto  font-mono  tracking-wide "
                >
                  {data?.email}
                </Link>
              </li>
            ))
          ) : (
            <div className=" w-[90%]  mx-auto  flex flex-col justify-center  items-center">
              <h4>No Users to show</h4>
              <button
                onClick={() => setReload(!reload)}
                className="text-white  bg-[#03045e] p-[1rem]   font-serif flex flex-col justify-around items-center"
              >
                Reload
                <MdReplayCircleFilled className="text-[2rem]  text-white " />
              </button>
            </div>
          )}
        </ol>
      </section>
    </main>
  );

  return isAllowed === true && content;

  // return content;
}
