import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import * as EmailValidator from "email-validator";
import { GrUserSettings } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { errorMsg } from "../../../helper/errorMsg";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { useNavigate, useLocation, useOutletContext } from "react-router-dom";
import useRouteProtect from "../../../hooks/useRouteProtect";
import axios from "../../../api/axios";

export default function ProfileUi() {
  // LOGIC STATES AND VARIABLES
  const [logicError, setLogicError] = useState("");
  const [logicSuccessMsg, setLogicSuccessMsg] = useState("");
  const [serverData, setServerData] = useState();
  const [errMessage, setErrMessage] = useState();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isAllowed, setIsAllowed] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const location = useLocation();
  const { auth } = useOutletContext();

  useRouteProtect(auth?.accessToken, setIsAllowed);

  console.log(auth);
  // FETCHING USER DATA
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axiosPrivate(`/singleuser/${auth?.id}`);

        console.log(response);
        // console.log(response);

        if (response?.status != 200) {
          setErrMessage(response?.data?.message ?? response?.data);
        }
        if (!ignore) {
          setServerData(response?.data?.foundUser);
        }
      } catch (error) {
        const err = errorMsg(error);
        setErrMessage(err);
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

  console.log(serverData);

  // /dashboard/settings ROUTE PROTECTION

  // DESTRUCTURED USEFORM DATA

  // SETTING-UI CONTENT
  //changed

  const logout = async () => {
    try {
      const res = await axiosPrivate("/logout");
      // console.log(res);
      if (res?.status != 200) {
        setErrMessage(res?.data ?? res?.message);
      }

      if (res?.status === 200) {
        navigate("/");
      }
    } catch (error) {
      const err = errorMsg(error);
      setErrMessage(err);
    }
  };
  const content = (
    <main
      className="w-full min-h-screen     text-black  flex  flex-col   justify-start  items-center  gap-4
      "
    >
      {errMessage && <p className="text-red-500 mx-auto ">{errMessage}</p>}
      <section>
        <h2 className="text-[1.2rem] font-bold  tracking-wide">
          Email:{" "}
          {isLoading ? (
            <span className="animate-pulse  italic">loading...</span>
          ) : (
            serverData?.email ?? "No data"
          )}
        </h2>
        <h2 className="text-[1.2rem] font-bold  tracking-wide">
          Full Name:{" "}
          {isLoading ? (
            <span className="animate-pulse italic">loading...</span>
          ) : (
            serverData?.fullName ?? "No data"
          )}
        </h2>
        <h2 className="text-[1.2rem] font-bold  tracking-wide">
          Investment plan:{" "}
          {isLoading ? (
            <span className="animate-pulse  italic">loading...</span>
          ) : (
            serverData?.plan ?? "No data"
          )}
        </h2>

        <button
          onClick={() => logout()}
          className="bg-red-500 font-black p-2 text-white rounded-md shadow-inner shadow-white text-center tracking-wide"
        >
          Logout
        </button>
      </section>

      <hr className={`sm:hidden  w-[30%]  mx-auto bg-gray-500  my-[1rem]`} />

      <section className="w-[80%]  text-center  mx-auto ">
        <article className="bg-gray-500 text-white  text-center  flex flex-col justify-center p-[1rem]  items-center  gap-3  ">
          <h2 className="font-bold tracking-wide">Account Security</h2>
          <p className=" w-full  font-thin text-gray-200   p-[1rem]">
            We employ state-of-the-art security measures to safeguard our
            clients' accounts and personal information from any unauthorized
            access or potential security threats. Our team continuously monitors
            and updates our security protocols to ensure the highest level of
            protection for your assets and data.
          </p>
        </article>
      </section>
    </main>
  );

  return isAllowed === true && content;
  // return content;
}
