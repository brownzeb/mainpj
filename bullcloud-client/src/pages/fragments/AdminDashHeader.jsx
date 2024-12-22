import { FaUser } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoMdNotificationsOff } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { errorMsg } from "../../helper/errorMsg";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useRouteProtect from "../../hooks/useRouteProtect";

export default function AdminDashHeader() {
  const { auth } = useAuth();
  const [mode, setMode] = useState(false);
  const [serverData, setServerData] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const [isAllowed, setIsAllowed] = useState(false);

  console.log(auth);

  useRouteProtect(auth?.accessToken, setIsAllowed);
  const { id, fullName } = auth;
  // console.log(auth);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axiosPrivate.get("/allusers");
        // console.log(response);
        if (response?.status != 200) {
          setErrorMessage(
            response?.data?.message ? response?.data?.message : response?.data
          );
        }

        ignore === true && setServerData(response?.data);
      } catch (error) {
        // console.log(error);
        const err = errorMsg(error);
        setErrorMessage(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    let ignore = false;

    fetchData();

    return () => {
      ignore = true;
    };
  }, []);

  const withdrawaltAlert =
    serverData?.allUsers && serverData?.allUsers.length != 0
      ? serverData?.allUsers.filter((el) => el.withdrawalReq === true).length
      : 0;

  const usersWithDeposit =
    serverData?.allUsers && serverData?.allUsers.length != 0
      ? serverData?.allUsers.filter((el) => el.depositAlert === true).length
      : 0;
  // const { state } = useLocation();

  console.log(usersWithDeposit, withdrawaltAlert);
  // const { fullName } = state;
  console.log(fullName);
  const content = (
    <header
      className={`h-[5rem]  w-full flex  justify-center  items-center    ${
        mode ? "bg-black text-white" : "bg-white text-black"
      }  sticky top-0  z-50 `}
    >
      <section className="w-[90%] mx-auto  flex justify-around  items-center">
        <FaUser className="text-[1.6rem] " />
        <h2 className="flex flex-col justify-center  items-center">
          <span className="block">Admin Control</span>
          {fullName}
        </h2>
        <div className="relative">
          <span
            className={`w-3 h-3 rounded-full  top-0  absolute  ${
              usersWithDeposit > 0 || withdrawaltAlert > 0
                ? "bg-red-500"
                : "bg-transparent"
            }`}
          ></span>
          <IoMdNotifications className="text-[1.6rem] " />
        </div>
        <button onClick={() => setMode(!mode)}>
          {mode ? (
            <MdLightMode className="text-[1.6rem] text-white " />
          ) : (
            <MdDarkMode className="text-[1.6rem]  text-black" />
          )}
        </button>
      </section>
    </header>
  );

  return isAllowed === true && content;
}
