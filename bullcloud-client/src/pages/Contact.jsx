import contact from "../assets/contactusimg.jpg";
import { contactusData } from "../data";
import { useForm } from "react-hook-form";
import { FaRegCircleUser } from "react-icons/fa6";
import { useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
// import axios from "axios";
import * as EmailValidator from "email-validator";
import { useNavigate, Link } from "react-router-dom";
import axios from "../api/axios";
import { errorMsg } from "../helper/errorMsg";
import { jwtDecode } from "jwt-decode";
import useAuth from "../hooks/useAuth";
import { MdContactMail } from "react-icons/md";

export default function Contact() {
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

  const { setAuth, auth } = useAuth();
  let err_msg;

  // FORM SUBMITION
  const onSubmit = async (data) => {
    console.log(data);
    const { email, message } = data;
    if (!email && !message) {
      setLogicError((p) => ({
        ...p,
        isError: true,
        errorData: "All fields are required",
      }));
      console.log("all fields");
    }

    if (!EmailValidator.validate(email)) {
      setLogicError((p) => ({
        ...p,
        isError: true,
        errorData: "Invalid email address",
      }));
    }

    setLogicError((p) => ({
      ...p,
      isError: false,
      succMsg: "Thanks for your message and you will hear from us soon.",
    }));

    // More validations can be added based on security target

    try {
      setIsloading(true);
    } catch (error) {
      const err = errorMsg(error);
      console.log(err);
      setLogicError((prev) => ({ ...prev, isError: true, errorData: err }));
      // throw new Error(error);
    } finally {
      reset();
      setIsloading(false);
    }
  };

  const content = (
    <main>
      <section className="w-full h-[10rem] md:h-[15rem] bg-black text-white flex  relative">
        {/* <div className=" h-[0.05rem]  w-[70%]  bottom-14  left-2  absolute  bg-white"></div>
        <div className=" h-[3rem]  w-[0.05rem]  bottom-10  left-4  absolute  bg-white"></div> */}

        <div className=" w-[30%]  flex justify-center  bg-gray-400 text-white items-center "></div>
        <div className=" w-[70%]    flex justify-center  bg-gray-400 text-white items-center">
          <img
            src={contact}
            alt="contact"
            className="w-full h-full  rounded-l-[5rem] "
          />
        </div>
      </section>
      <section className="w-full   my-[5rem]      grid  grid-cols-1 md:grid-cols-3 gap-3 tracking-wide  ">
        {contactusData.map((data) => (
          <div
            key={data.id}
            className="bg-white  shadow-xl shadow-gray-500 w-[70%] p-3 mx-auto  text-center   flex flex-col  justify-center  items-center gap-2"
          >
            {data.icon}
            <h2 className="text-red-500  font-serif">{data.name}</h2>
            <h5>{data.value}</h5>
          </div>
        ))}
      </section>
      <section className="w-full  my-[2rem]">
        <div className=" w-[98%] md:w-[60%]  mx-auto flex justify-around  items-center">
          {" "}
          <span className="text-md capitalize mx-auto    font-bold ">
            Feel Free to drop us a message
          </span>{" "}
        </div>
        {/* <hr className="w-[50%] bg-black" /> */}

        {logicError.errorData && logicError.isError === true ? (
          <p className="error-msg-style ">{logicError.errorData}</p>
        ) : loading ? (
          <ScaleLoader
            color="white"
            cssOverride={{ height: "500", width: "500" }}
          />
        ) : (
          logicError.succMsg &&
          logicError.isError === false && (
            <p className=" w-[80%]  mx-auto  text-gray-600">
              {logicError.succMsg}
            </p>
          )
        )}
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className=" w-[90%] mx-auto  min-h-[10rem] flex flex-col  gap-3  justify-center items-center p-2"
        >
          <div className="form-div-style">
            <label htmlFor="email" className="form-label-style ">
              {/* Email:{" "} */}
            </label>
            <input
              type="text"
              placeholder="Email*"
              id="email"
              {...register("email", {
                required: { value: true, message: "Please fill this field" },
                maxLength: { value: 50, message: "Length exceeded." },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                },
              })}
              name="email"
              className={`form-input-style  ${
                errors?.email ? "border-red-400" : "border-gray-500"
              } `}
            />
            {errors?.email && errors?.email?.type === "required" && (
              <p className="error-msg-style">{errors?.email?.message}</p>
            )}

            {errors?.email && errors?.email?.type === "maxLength" && (
              <p className="error-msg-style"> {errors?.email?.message}</p>
            )}

            {errors?.email && errors?.email?.type === "pattern" && (
              <p className="error-msg-style"> {errors?.email?.message}</p>
            )}
          </div>
          {/* END OF EMAIL */}

          {/* PASSWORD  */}
          <div className="form-div-style">
            <label htmlFor="message" className="form-label-style ">
              Message:{" "}
            </label>
            <textarea
              type="text"
              placeholder="Leave us a message here."
              id="message"
              name="message"
              {...register("message", {
                required: { value: true, message: "Please fill this field" },
              })}
              className={`form-input-style  ${
                errors.message ? "border-red-400" : "border-gray-500"
              } `}
            />
            {errors?.message && errors?.message?.type === "required" && (
              <p className="error-msg-style">{errors?.message?.message}</p>
            )}
          </div>
          {/* END OF PASSWORD */}

          <input
            type="submit"
            className="bg-red-500  text-white  font-serif  text-xl tracking-wide text-[0.8rem]  mx-auto block py-[0.2rem]  px-[2rem]"
          />
        </form>
      </section>
    </main>
  );

  return content;
}
