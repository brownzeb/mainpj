import { useState } from "react";
// import { FaUpload } from "react-icons/fa";
import axios from "../../../api/axios";
import { useOutletContext } from "react-router-dom";
// import { useForm } from "react-hook-form";
import ScaleLoader from "react-spinners/ScaleLoader";
import { errorMsg } from "../../../helper/errorMsg";
import useRouteProtect from "../../../hooks/useRouteProtect";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

export default function MarketUi() {
  const [file, setFile] = useState();
  const [successMsg, setSuccessMsg] = useState();
  const [errMsg, setErrMsg] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isAllowed, setIsAllowed] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  // const { register, handleSubmit } = useForm();

  const { auth } = useOutletContext();

  console.log(auth?.id);

  // useRouteProtect(auth?.accessToken, setIsAllowed);

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

  const content = (
    <main className="w-full min-h-screen  flex justify-center items-center"></main>
  );

  // return isAllowed === true && content;

  return content;
}
