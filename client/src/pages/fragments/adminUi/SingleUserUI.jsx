import {
  useParams,
  useOutletContext,
  useOutlet,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { errorMsg } from "../../../helper/errorMsg";
import axios from "../../../api/axios";
import { useForm } from "react-hook-form";
import { MdDeleteForever } from "react-icons/md";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useRouteProtect from "../../../hooks/useRouteProtect";

export default function SingleUserUi() {
  const params = useParams();
  const { auth } = useOutletContext();
  const [errMessage, setErrMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [serverData, setServerData] = useState();
  const [update, setUpdate] = useState(false);
  const [genProfit, setGenProfit] = useState(true);

  const [isAllowed, setIsAllowed] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const { id } = params;
  console.log(auth);
  console.log(params);

  useRouteProtect(auth?.accessToken, setIsAllowed);

  // FETCHING USER DATA
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axiosPrivate(`/singleuser/${id}`);

        console.log(response);

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
  }, [update]);

  // DATA MODIDIFICATIONS

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      loss: serverData?.loss,
      profit: serverData?.profit,
      balance: serverData?.balance,
      invested: serverData?.invested,

      plan: serverData?.plan,
    },
  });

  // SETTING DEFAULT VALUES

  setValue("plan", serverData?.plan, {
    shouldDirty: true,
    shouldTouch: true,
  });
  setValue("balance", serverData?.balance, {
    shouldDirty: true,
    shouldTouch: true,
  });
  setValue("invested", serverData?.invested, {
    shouldDirty: true,
    shouldTouch: true,
  });
  setValue("loss", serverData?.loss, { shouldDirty: true, shouldTouch: true });
  setValue("profit", serverData?.profit, {
    shouldDirty: true,
    shouldTouch: true,
  });

  // START & STOP PROFIT FUNCTIONS

  // const startGeneratingProfit = () => {
  //   if (stopGenProfit === true) {
  //     setStopGenProfit(false);
  //   }

  //   setStartGenProfit(true);
  // };

  // const stopGeneratingProfit = () => {
  //   if (startGenProfit === true) {
  //     setStartGenProfit(false);
  //   }

  //   setStopGenProfit(true);
  // };

  // FORM SUBMITION
  const onSubmit = async (data) => {
    console.log(data);
    // alert(data);
    const { plan, balance, loss, profit, invested } = data;
    // if (!plan && !balance && !loss && !secretQuestion && !secretAnswer) {
    //   return setErrMessage("All fields are required");
    // }

    // More validations can be added based on security target

    try {
      const credentials = {
        id,
        plan: plan && plan != "" ? plan : "None",
        balance: balance && balance != "" ? balance : "00.00",
        invested: invested && invested != "" ? invested : "00.00",
        loss: loss && loss != "" ? loss : "00.00",
        profit: profit && profit != "" ? profit : "00.00",
        genProfit,
      };
      const apiHeader = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      setIsLoading(true);
      const response = await axiosPrivate.patch("/edituser", credentials);

      console.log(response);
      if (response?.status === 200) {
        setUpdate(!update);
      }
      // if (response.status === 201 || response?.data?.message === "Success") {
      //   navigate("/login");
      // }
    } catch (error) {
      const err = errorMsg(error);
      setErrMessage(err);
      // throw new Error(error);
    } finally {
      reset();
      setIsLoading(false);
    }
  };

  // INTERVAL CALL

  // const delay = 1000 * 2;

  // const sayHi = () => {
  //   console.log();
  // };

  // const intervalId = setInterval(sayHi, delay);

  // DELETE FUNC

  const delCall = async (userId) => {
    try {
      const res = await axiosPrivate.delete(`/deleteuser/${userId}`);
      console.log(res);

      if (res?.status === 200) {
        navigate("/admin-dashboard/users");
      }
    } catch (error) {
      const err = errorMsg(error);
      setErrMessage(err);
    }
  };

  console.log(serverData);

  const content = (
    <main className=" w-full  min-h-screen  flex  flex-col  gap-3  my-[4rem] justify-center  items-center">
      <section className=" w-[98%] mx-auto   rounded-t-xl  bg-gray-300 text-white p-3  flex  flex-col  gap-3 justify-start  items-center ">
        {/* <h3 className="w-[80%] lg:w-[40%] h-[7rem]   shadow-md shadow-gray-500  rounded-full border-4  border-white  text-[6rem] mx-auto uppercase text-center   flex justify-center  items-center">
          {serverData?.fullName.charAt()}
        </h3> */}

        <ul className="text-[0.9rem] font-serif tracking-wide    text-gray-600   grid  grid-cols-1 lg:grid-cols-2  gap-3">
          <li>Fullname: {serverData?.fullName}</li>
          <li>Email: {serverData?.email}</li>
          <li>Plan: {serverData?.plan}</li>
          <li>Invested: {serverData?.invested}</li>

          <li>Profit: {serverData?.profit}</li>
          <li>Balance: {serverData?.balance}</li>
          <li>Loss: {serverData?.loss}</li>
          <li>Registerd on: {serverData?.createdAt.slice(0, 10)}</li>

          <li>BTC wallet: {serverData?.btc}</li>
          <li>ETH wallet: {serverData?.eth}</li>
          <li>USDT wallet: {serverData?.usdt}</li>
        </ul>
        <button
          onClick={() => delCall(id)}
          className=" flex justify-center items-center   mx-auto  bg-red-500  text-white    py-[0.5rem] px-[2rem] shadow-inner shadow-gray-800  text-[1.3rem] font-thin  tracking-wide"
        >
          <MdDeleteForever className="text-[1.5rem] mr-[0.6rem]" /> Delete this
          user{" "}
        </button>
      </section>
      <section className="w-[98%]  mx-auto  my-[1rem]   flex flex-col  justify-around  items-center">
        <h4 className="w-fit mx-auto font-serif  text-balance  capitalize  tracking-wide text-red text-[1.5rem] ">
          Edit user info
        </h4>

        <div className="w-[90%]  mx-auto tex-center  shadow-lg  capitalize shadow-gray-500 flex flex-col  sm:flex-row  justify-center  items-center  gap-[1rem]  ">
          <button
            onClick={() => {
              setGenProfit(!genProfit);
            }}
            className={`${
              genProfit ? "bg-red-500  text-white" : "bg-green-500  text-black"
            } tracking-wide font-serif  capitalize  px-[1rem]  py-[0.5rem]`}
          >
            {genProfit ? "Stop" : "Start"} generating profit
          </button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" w-[90%]   min-h-[10rem]  bg-slate-200 flex flex-col lg:grid lg:grid-cols-2  gap-3  justify-center items-center p-2"
        >
          {/* PLAN  */}
          <div className="form-div-style">
            {/* <h4>
            We are happy{" "}
            <span className="text-yellow-400 text-[1.4rem] "> &#9787; </span>
            to have you.{" "}
          </h4> */}
            <label htmlFor="plan" className="form-label-style ">
              Plan:{" "}
            </label>
            <input
              type="text"
              // defaultValue={serverData?.plan}
              id="plan"
              {...register("plan", {
                // required: { value: true, message: "Please fill this field" },
                // maxLength: { value: 50, message: "Length exceeded." },
                // minLength: {
                //   value: 2,
                //   message:
                //     "Plan text should be more than three (3) characters.",
                // },
              })}
              name="plan"
              className={`form-input-style  ${
                errors.plan ? "border-red-400" : "border-gray-500"
              } `}
            />
            {/* {errors?.plan && errors?.plan?.type == "required" && (
              <p className="error-msg-style">{errors?.plan?.message}</p>
            )} */}

            {/* {errors?.plan && errors?.plan?.type == "maxLength" && (
              <p className="error-msg-style"> {errors?.plan?.message}</p>
            )}

            {errors?.plan && errors?.plan?.type == "minLength" && (
              <p className="error-msg-style"> {errors?.plan?.message}</p>
            )} */}
          </div>
          {/* END OF PLAN */}

          {/* BALANCE  */}
          <div className="form-div-style">
            <label htmlFor="balance" className="form-label-style ">
              Balance :{" "}
            </label>
            <input
              type="text"
              // readOnly={true}
              // placeholder={serverData?.balance}
              // defaultValue={serverData?.balance}
              id="balance"
              {...register("balance", {
                // required: { value: true, message: "Please fill this field" },
                // maxLength: { value: 50, message: "Length exceeded." },
              })}
              name="balance"
              className={`form-input-style  ${
                errors?.balance ? "border-red-400" : "border-gray-500"
              } `}
            />
            {/* {errors?.balance && errors?.balance?.type == "required" && (
              <p className="error-msg-style">{errors?.balance?.message}</p>
            )} */}

            {/* {errors?.balance && errors?.balance?.type == "maxLength" && (
              <p className="error-msg-style"> {errors?.balance?.message}</p>
            )} */}
          </div>
          {/* END OF BALANCE */}

          {/* INVESTED */}
          <div className="form-div-style">
            <label htmlFor="invested" className="form-label-style ">
              Invested :{" "}
            </label>
            <input
              type="text"
              // placeholder={serverData?.balance}
              // defaultValue={serverData?.balance}
              id="invested"
              {...register("invested", {
                // required: { value: true, message: "Please fill this field" },
                // maxLength: { value: 50, message: "Length exceeded." },
              })}
              name="invested"
              className={`form-input-style  ${
                errors?.invested ? "border-red-400" : "border-gray-500"
              } `}
            />
            {/* {errors?.balance && errors?.balance?.type == "required" && (
              <p className="error-msg-style">{errors?.balance?.message}</p>
            )} */}

            {/* {errors?.balance && errors?.balance?.type == "maxLength" && (
              <p className="error-msg-style"> {errors?.balance?.message}</p>
            )} */}
          </div>
          {/* END OF invested */}

          {/* PROFIT  */}
          <div className="form-div-style">
            <label htmlFor="profit" className="form-label-style ">
              Profit :{" "}
            </label>
            <input
              type="text"
              // readOnly={true}
              // placeholder={serverData?.profit}
              // defaultValue={serverData?.profit}
              id="profit"
              {...register("profit", {
                // required: { value: true, message: "Please fill this field" },
                // maxLength: { value: 50, message: "Length exceeded." },
              })}
              name="profit"
              className={`form-input-style  ${
                errors?.profit ? "border-red-400" : "border-gray-500"
              } `}
            />
            {/* {errors?.profit && errors?.profit?.type == "required" && (
              <p className="error-msg-style">{errors?.profit?.message}</p>
            )} */}

            {/* {errors?.profit && errors?.profit.type == "maxLength" && (
              <p className="error-msg-style"> {errors?.profit?.message}</p>
            )} */}
          </div>
          {/* END OF PROFIT */}

          {/* LOSS  */}
          <div className="form-div-style">
            <label htmlFor="loss" className="form-label-style ">
              Loss:{" "}
            </label>
            <input
              type="text"
              // placeholder={serverData?.loss}
              // defaultValue={serverData?.loss}
              id="loss"
              {...register("loss", {
                // required: { value: true, message: "Please fill this field" },
                // maxLength: { value: 25, message: "Length exceeded." },
                // minLength: {
                //   value: 7,
                //   message: "input data should be more than six (6) characters.",
                // },
              })}
              name="loss"
              className={`form-input-style  ${
                errors.loss ? "border-red-400" : "border-gray-500"
              } `}
            />
            {/* {errors?.loss && errors?.loss?.type == "required" && (
              <p className="error-msg-style">{errors?.loss?.message}</p>
            )} */}
            {/* 
            {errors?.loss && errors?.loss?.type == "maxLength" && (
              <p className="error-msg-style"> {errors?.loss?.message}</p>
            )}

            {errors?.loss && errors?.loss?.type == "minLength" && (
              <p className="error-msg-style"> {errors?.loss?.message}</p>
            )} */}
          </div>
          {/* END OF LOSS */}

          <button
            type="submit"
            className="bg-green-700  rounded-md    text-black  tracking-wide  font-serif  mx-auto block   shadow-inner  shadow-gray-400  py-[0.5rem]  px-[1rem]  lg:col-span-2"
          >
            Update Now
          </button>
        </form>
      </section>
    </main>
  );

  return isAllowed === true && content;
  // return content;
}
