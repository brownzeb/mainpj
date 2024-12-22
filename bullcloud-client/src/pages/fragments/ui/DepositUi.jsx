import { useForm } from "react-hook-form";
import { FaRegCircleUser } from "react-icons/fa6";
import { useEffect, useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

// import axios from "axios";
import * as EmailValidator from "email-validator";
import { useNavigate, Link, useOutletContext } from "react-router-dom";
import axios from "../../../api/axios";
import { errorMsg } from "../../../helper/errorMsg";
import { jwtDecode } from "jwt-decode";
import useAuth from "../../../hooks/useAuth";
import copy from "clipboard-copy";
import { FaPlusCircle } from "react-icons/fa";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useRouteProtect from "../../../hooks/useRouteProtect";

import { adminWalletData, walletTypes } from "../../../data";

export default function DepositUi() {
  let WA;
  const navigate = useNavigate();
  const [loading, setIsloading] = useState(false);
  const [serverMsg, setServerMsg] = useState({});
  const [walletType, setWalletType] = useState();
  const [walletAddr, setWalletAddr] = useState();
  const [isAllowed, setIsAllowed] = useState(false);
  const { auth } = useOutletContext();
  const axiosPrivate = useAxiosPrivate();

  useRouteProtect(auth?.accessToken, setIsAllowed);

  // DESTRUCTURED USEFORM DATA
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const setWalletData = (wType, wAddr) => {
    setWalletAddr(wAddr);
    setWalletType(wType);
    copy(wAddr);
  };

  const addToArray = (a) => {};

  const id = auth?.id;

  let err_msg;
  let txnHistory = [];

  // FORM SUBMITION
  const onSubmit = async (data) => {
    console.log(data);
    const { depositedAmount } = data;
    if (!depositedAmount) {
      setServerMsg("Please enter the amount you wish to deposit.");
    }

    // if (!EmailValidator.validate(email)) {
    // setLogicError("Invalid email address");
    // }

    // More validations can be added based on security target
    console.log(walletAddr, walletType);

    try {
      const credentials = { id, walletAddr, depositedAmount, walletType };
      const apiHeader = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      setIsloading(true);
      const response = await axiosPrivate.patch(
        `/depositfunds/${auth?.id}`,
        credentials,
        apiHeader
      );

      console.log(response);

      if (!response.ok) {
        // setServerMsg(response?.data?.message ?? response?.data);
        setServerMsg((p) => ({
          ...p,
          msg: response?.data?.message ?? response?.data,
          isError: true,
        }));
      }
      if (response.status === 200) {
        // const serverData = response?.data?.message;
        setServerMsg((p) => ({
          ...p,
          msg: response?.data?.message,
          isError: false,
        }));

        const date = new Date().toDateString();
        // const time = new Date().toLocaleString("en-US", {
        //   hour: "numeric",
        //   minute: "numeric",
        //   hours12: true,
        //   timeZone: "America/New_York",
        // });

        const unitTxn = {
          id,
          date,
          txnType: "deposit",
          amount: depositedAmount,
        };

        const histRes = await axios.patch("/saveHistory", unitTxn);

        console.log(histRes);
        // txnHistory.push(unitTxn);
        // localStorage.setItem("historyData", JSON.stringify(txnHistory));
      }
    } catch (error) {
      const err = errorMsg(error);
      console.log(err);
      setServerMsg(err);
      setServerMsg((p) => ({
        ...p,
        msg: err,
        isError: true,
      }));

      // throw new Error(error);
    } finally {
      reset();
      setIsloading(false);
    }
  };

  // console.log(logicError);
  // console.log(auth);
  // console.log("hello");
  // REGISTER PAGE CONTENT
  const content = (
    <main className="w-full min-h-screen     text-black  flex  flex-col py-16  justify-around  items-center  ">
      <div className="flex justify-center  items-center">
        {" "}
        <span
          className="text-[1.5rem]  text-red-500 font-serif"
          style={{ textShadow: "2px 2px darkgray" }}
        >
          Deposit Funds
        </span>{" "}
        {/* <FaPlusCircle className="inline  my-2 text-[2rem] " />{" "} */}
      </div>
      <hr className="w-[50%] bg-black" />

      <ol className="w-[85%] lg:w-[60%] mx-auto  list-decimal list-inside  bg-gray-300    text-[1.2rem]  font-md  tracking-wide  text-gray-500   p-3 ">
        <li>Input amount you wish to deposit</li>
        <li>Copy any of the crypto wallet below and make deposit to it.</li>
        <li>Click on the "I have deposited this crypto" button</li>
      </ol>

      {serverMsg?.msg && serverMsg?.isError === true ? (
        <p className=" mx-auto text-center  bg-gray-300  p-1 my-4   text-red-600     ">
          {serverMsg?.msg}
        </p>
      ) : serverMsg?.msg && serverMsg?.isError === false ? (
        <p className=" mx-auto text-center   bg-gray-300   p-1 my-4   text-green-600     ">
          {" "}
          {serverMsg?.msg}
        </p>
      ) : (
        loading && (
          <PropagateLoader
            color="red"
            cssOverride={{ height: "500", width: "500" }}
          />
        )
      )}

      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className=" w-[90%]   min-h-[10rem] flex flex-col  gap-3  justify-center items-center p-2"
      >
        {/* DEPOSIT AMOUNT */}
        <div className="form-div-style">
          <label htmlFor="depositedAmount" className="form-label-style ">
            Amount in USD :{" "}
          </label>
          <input
            type="number"
            placeholder="00.00"
            id="depositedAmount"
            {...register("depositedAmount", {
              required: { value: true, message: "Please fill this field" },
              maxLength: { value: 50, message: "Length exceeded." },
            })}
            name="depositedAmount"
            className={`form-input-style  ${
              errors?.depositedAmount ? "border-red-400" : "border-gray-500"
            } `}
          />
          {errors?.depositedAmount &&
            errors?.depositedAmount?.type === "required" && (
              <p className="error-msg-style">
                {errors?.depositedAmount?.message}
              </p>
            )}

          {errors?.depositedAmount &&
            errors?.depositedAmount?.type === "maxLength" && (
              <p className="error-msg-style">
                {" "}
                {errors?.depositedAmount?.message}
              </p>
            )}
        </div>
        {/* END OF WITHDRAWAL AMOUNT */}

        {/* WALLET TYPE*/}
        {/* 
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
              errors.walletType ? "border-red-400" : "border-green-500"
            } `}
          >
            {" "}
            {/* {walletTypes.map((data) => ( */}
        {/* {adminWalletData.map((data) => (
              <option key={data?.id} value={data?.walletType}>
                {data?.walletType}
              </option>
            ))}
          </select>
        </div> */}

        {/* END OF WALLET TYPE */}

        {/* <div className="form-div-style">
          {adminWalletData.map(
            (data) =>
              (WA =
                data.walletType === getValues("walletType")
                  ? data?.walletAddr
                  : "")
          )}
          <button
            className="text-white bg-green-500 p-2 text-center "
            onClick={() => copy(WA)}
          >
            &#10064;Copy wallet
          </button>
        </div> */}

        {/* WALLET ADDRESS  */}
        {/* <div className="form-div-style ">
          <label htmlFor="walletAddr" className="form-label-style ">
            WALLET ADDRESS:{" "}
          </label>
          <input
            type="checkbox"
            id="walletAddr"
            defaultValue={"dfbd"}
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
              errors.walletAddr ? "border-red-400" : "border-green-500"
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
        </div> */}
        {/* END OF walletAddr */}

        {/* WALLET-TYPE AND WALLET-ADDR */}

        <div className="w-full flex flex-col  justify-around  items-center  lg:flex-row gap-3 ">
          {adminWalletData.map((data) => (
            <div
              className="w-[90%] mx-auto  min-h-[6rem]  rounded-[1.5rem]   shadow-lg shadow-gray-500  flex  gap-3  flex-col justify-around items-center"
              key={data.id}
            >
              <h4 className=" min-w-fit mx-auto  text-[1.5rem]  uppercase    font-bold tracking-wide ">
                {data.walletType}
              </h4>
              {/* <hr className="w-[40%]  mx-auto bg-black " /> */}
              <h5 className="mx-auto border-y-2 border-gray-500  text-[1.2rem] font-serif p-3 ">
                Network: {data?.network}
              </h5>
              <p className=" w-[70%]  overflow-x-scroll">{data?.walletAddr}</p>
              <p
                className="text-[1.2rem] p-2  mb-2 bg-[#03045e] text-white  hover:cursor-pointer shadow-lg shadow-gray-600  font-md tracking-wide "
                onClick={() =>
                  setWalletData(data?.walletType, data?.walletAddr)
                }
              >
                {" "}
                &#10064; Copy {data?.walletType} wallet address.
              </p>
            </div>
          ))}
        </div>
        {/* END OF WALLET-TYPE AND WALLET-ADDR */}

        <button
          type="submit"
          className="bg-red-500 text-white  mt-[0.8rem]  text-[0.9rem] tracking-wide rounded-lg  mx-auto block  py-2   px-[2rem]"
        >
          I have deposited this crypto
        </button>
      </form>
    </main>
  );

  return isAllowed === true && content;
  // return content;
}
