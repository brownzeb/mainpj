import { FaUser } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoMdNotificationsOff } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import { MdWavingHand } from "react-icons/md";
import useRouteProtect from "../../hooks/useRouteProtect";

import { useState } from "react";

export default function DashboardHeader() {
  const { auth } = useAuth();
  const [mode, setMode] = useState(false);
  const [isAllowed, setIsAllowed] = useState(false);

  console.log(auth);

  useRouteProtect(auth?.accessToken, setIsAllowed);
  const { id, fullName, plan } = auth;
  // console.log(auth);

  // const { state } = useLocation();

  // const { fullName } = state;
  console.log(fullName);
  const content = (
    <header
      className={`h-[5rem]  w-full flex  justify-center  items-center    ${
        mode ? "bg-black text-white" : "bg-white text-black"
      }  sticky top-0  z-50 `}
    >
      <section className="w-[90%] mx-auto flex justify-around  items-center">
        <h1 className="h-[4rem]  w-[4rem]  border-2 border-black  rounded-full text-center text-[2rem]  uppercase font-black  flex  justify-center items-center  ">
          {fullName.charAt()}
        </h1>
        <h2 className="flex gap-2  justify-center  items-center   ">
          <span className="block  font-bold tracking-wide">Hello </span>
          <MdWavingHand className="text-yellow-500   text-[1.2rem]" />
          {/* <span className="font-bold tracking-wide truncate"> </span> */}
        </h2>
        <IoMdNotifications className="text-[1.6rem] " />
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
