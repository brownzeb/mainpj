import { useForm } from "react-hook-form";
import { FaRegCircleUser } from "react-icons/fa6";
import { useEffect, useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { PiHandWithdrawFill } from "react-icons/pi";
// import axios from "axios";
import * as EmailValidator from "email-validator";
import { useNavigate, Link, useOutletContext } from "react-router-dom";
import axios from "../../../api/axios";
import { errorMsg } from "../../../helper/errorMsg";
import { jwtDecode } from "jwt-decode";
import useAuth from "../../../hooks/useAuth";
import { walletTypes } from "../../../data";
import useRouteProtect from "../../../hooks/useRouteProtect";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
// import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { GrStatusGood } from "react-icons/gr";

export default function WithdrawUi() {
  // DESTRUCTURED USEFORM DATA
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const [logicError, setLogicError] = useState({});
  const navigate = useNavigate();
  const [loading, setIsloading] = useState(false);
  const [successMsg, setSuccessMsg] = useState();
  const [isSucc, setIsSucc] = useState(false);
  const [withdUi, setWthdUi] = useState({});
  const [isAllowed, setIsAllowed] = useState(false);
  const { auth } = useOutletContext();
  const axiosPrivate = useAxiosPrivate();

  const id = auth?.id;

  console.log(id);

  let err_msg;

  useRouteProtect(auth?.accessToken, setIsAllowed);

  // FORM SUBMITION
  const onSubmit = async (data) => {
    console.log(data);

    setWthdUi((p) => ({ ...p, isError: false, isLoading: true }));

    const { walletType, walletAddr, withdrawalAmount } = data;
    if (!walletAddr || !walletType || !withdrawalAmount) {
      setLogicError("All fields are required");
      setWthdUi((p) => ({
        ...p,
        isError: true,
        errMsg: "All fields are required",
      }));
    }

    // if (!EmailValidator.validate(email)) {
    // setLogicError("Invalid email address");
    // }

    // More validations can be added based on security target

    try {
      const credentials = { id, walletAddr, withdrawalAmount, walletType };
      const apiHeader = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      setIsloading(true);
      const response = await axiosPrivate.patch(`/withdrawfunds`, credentials);

      console.log(response);

      if (!response?.status != 200) {
        // setLogicError((prev) => ({
        //   ...prev,
        //   errorData: response?.data?.message,
        // }));
        setWthdUi((p) => ({
          ...p,
          isError: true,
          errMsg: response?.data?.message ?? response?.data,
        }));
      }
      if (response.status === 200) {
        const serverData = response?.data?.message;
        setWthdUi((p) => ({
          ...p,
          isError: false,
          succMsg: response?.data?.message ?? response?.data,
        }));

        const date = new Date().toDateString();

        const unitTxn = {
          id,
          date,
          txnType: "withdraw",
          amount: withdrawalAmount,
        };

        const histRes = await axios.patch("/saveHistory", unitTxn);
        console.log(histRes);
      }
    } catch (error) {
      const err = errorMsg(error);
      setWthdUi((p) => ({ ...p, isError: true, errMsg: err }));
      // throw new Error(error);
    } finally {
      reset();
      setIsloading(false);
      setWthdUi((p) => ({ ...p, isLoading: false }));
    }
  };

  // console.log(logicError);
  // console.log(auth);
  // console.log("hello");
  // REGISTER PAGE CONTENT
  const content = (
    <main className="w-full min-h-screen     text-black  flex  flex-col py-16  justify-start  items-center  ">
      <div className="flex flex-col  justify-center  items-center gap-[0.5rem]">
        {" "}
        <h2
          className="text-[1.5rem] text-red-500 font-serif   "
          style={{ textShadow: "2px 2px darkgray" }}
        >
          Withdraw Funds
        </h2>{" "}
        <PiHandWithdrawFill className="  text-red-500 text-[4rem] " />{" "}
      </div>
      {/* <hr className="w-[50%] bg-black" /> */}

      {withdUi?.errMsg && withdUi?.isError === true ? (
        <p className="error-msg-style ">{withdUi?.errMsg}</p>
      ) : loading ? (
        <PropagateLoader
          color="red"
          cssOverride={{ height: "500", width: "500" }}
        />
      ) : (
        withdUi &&
        withdUi?.isError === false &&
        withdUi?.succMsg && (
          <p className="text-gray-600 tracking-wide text-[0.9rem] font-thin ">
            {withdUi?.succMsg}{" "}
            <GrStatusGood className="inline text-green-500" />
          </p>
        )
      )}

      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className=" w-[90%]   min-h-[10rem] flex flex-col  gap-3  justify-center items-center p-2"
      >
        {/* WITHDRAWAL AMOUNT */}
        <div className="form-div-style">
          <label htmlFor="withdrawalAmount" className="form-label-style ">
            Amount in USD :{" "}
          </label>
          <input
            type="number"
            placeholder="00.00"
            id="withdrawalAmount"
            {...register("withdrawalAmount", {
              required: { value: true, message: "Please fill this field" },
              maxLength: { value: 50, message: "Length exceeded." },
            })}
            name="withdrawalAmount"
            className={`form-input-style  ${
              errors?.withdrawalAmount ? "border-red-400" : "border-gray-500"
            } `}
          />
          {errors?.withdrawalAmount &&
            errors?.withdrawalAmount?.type === "required" && (
              <p className="error-msg-style">
                {errors?.withdrawalAmount?.message}
              </p>
            )}

          {errors?.withdrawalAmount &&
            errors?.withdrawalAmount?.type === "maxLength" && (
              <p className="error-msg-style">
                {" "}
                {errors?.withdrawalAmount?.message}
              </p>
            )}
        </div>
        {/* END OF WITHDRAWAL AMOUNT */}

        {/* WALLET TYPE*/}

        <div className="form-div-style">
          <label htmlFor=" walletType" className="form-label-style ">
            Wallet Type:{" "}
          </label>
          <select
            type="text"
            id=" walletType"
            {...register("walletType", {
              required: { value: true, message: "Please fill this field" },
            })}
            name="walletType"
            className={`form-input-style  ${
              errors.walletType ? "border-red-400" : "border-gray-500"
            } `}
          >
            {" "}
            {walletTypes.map((data) => (
              <option key={data?.id} value={data?.name}>
                {data?.name}
              </option>
            ))}
          </select>
        </div>

        {/* END OF WALLET TYPE */}

        {/* WALLET ADDRESS  */}
        <div className="form-div-style">
          <label htmlFor="walletAddr" className="form-label-style ">
            Wallet Address:{" "}
          </label>
          <input
            type="text"
            id="walletAddr"
            name="walletAddr"
            {...register("walletAddr", {
              required: { value: true, message: "Please fill this field" },
              maxLength: { value: 70, message: "Invalid wallet address" },
              minLength: {
                value: 7,
                message: "invalid wallet address",
              },
            })}
            className={`form-input-style  ${
              errors.walletAddr ? "border-red-400" : "border-gray-500"
            } `}
          />
          {errors?.walletAddr && errors?.walletAddr?.type === "required" && (
            <p className="error-msg-style">{errors?.walletAddr?.message}</p>
          )}

          {errors?.walletAddr && errors?.walletAddr?.type === "maxLength" && (
            <p className="error-msg-style"> {errors?.walletAddr?.message}</p>
          )}

          {errors?.walletAddr && errors?.walletAddr?.type === "minLength" && (
            <p className="error-msg-style"> {errors?.walletAddr?.message}</p>
          )}
        </div>
        {/* END OF walletAddr */}

        <input
          type="submit"
          value="Proceed"
          className="bg-red-500  text-xl tracking-wide rounded-lg  mx-auto block  py-2 text-white px-[2rem]"
        />
      </form>
    </main>
  );

  return isAllowed === true && content;
  // return content;
}
