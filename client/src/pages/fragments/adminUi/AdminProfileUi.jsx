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

export default function AdminProfileUi() {
  // LOGIC STATES AND VARIABLES
  const [logicError, setLogicError] = useState("");
  const [logicSuccessMsg, setLogicSuccessMsg] = useState("");
  const navigate = useNavigate();
  const [loading, setIsloading] = useState(false);
  const [isAllowed, setIsAllowed] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const location = useLocation();
  const { auth } = useOutletContext();

  // /dashboard/settings ROUTE PROTECTION

  useRouteProtect(auth?.accessToken, setIsAllowed);

  // DESTRUCTURED USEFORM DATA

  // SETTING-UI CONTENT

  const logout = async () => {
    navigate("/");
  };
  const content = (
    <main className="w-full min-h-screen     text-black  flex  flex-col py-16  justify-around  items-center  ">
      <section>
        <h2>Email: mike@gmail.com</h2>
        <h2>Full Name: Mike Moore</h2>
        <h2>Investment plan: Mega</h2>

        <button
          onClick={() => logout()}
          className="bg-red-500 font-black p-2 text-white rounded-md shadow-inner shadow-white text-center tracking-wide"
        >
          Logout
        </button>
      </section>
    </main>
  );

  return isAllowed === true && content;
  // return content;
}
