import { useForm } from "react-hook-form";
import { FaRegCircleUser } from "react-icons/fa6";
import { useEffect, useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import axios from "../api/axios";
import * as EmailValidator from "email-validator";
import { useNavigate, Link } from "react-router-dom";
import { errorMsg } from "../helper/errorMsg";
import { secretQuestions } from "../data";
import regnow from "../assets/regnow.jpg";

export default function RegisterPage() {
  // DESTRUCTURED USEFORM DATA
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const [logicError, setLogicError] = useState("");
  const navigate = useNavigate();
  const [loading, setIsloading] = useState(false);

  // FORM SUBMITION
  const onSubmit = async (data) => {
    console.log(data);
    const { fullName, email, password, secretQuestion, secretAnswer } = data;
    if (!fullName && !email && !password && !secretQuestion && !secretAnswer) {
      return setLogicError("All fields are required");
    }

    if (!EmailValidator.validate(email)) {
      return setLogicError("Invalid email address");
    }

    // More validations can be added based on security target

    try {
      const credentials = {
        fullName,
        email,
        password,
        secretAnswer,
        secretQuestion,
      };
      const apiHeader = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      setIsloading(true);
      const response = await axios.post("/register", credentials);

      console.log(response);
      if (response.status === 201 || response?.data?.message === "Success") {
        navigate("/login");
      }
    } catch (error) {
      const err = errorMsg(error);
      setLogicError(err);
      // throw new Error(error);
    } finally {
      reset();
      setIsloading(false);
    }
  };

  // REGISTER PAGE CONTENT
  const content = (
    <main className="w-full min-h-screen    text-black  flex  flex-col py-2  justify-around  items-center  ">
      <h1
        className="text-[4rem]  font-extrabold text-red-500  text-balance"
        style={{ textShadow: "4px 4px black" }}
      >
        Sign Up
      </h1>

      <p className="w-[70%]  text-gray-900  text-[0.8rem]  font-thin  text-center tracking-wide">
        Create an account today to kickstart your earning process.
      </p>

      {/* <hr className="w-[50%] bg-black" /> */}
      {logicError && <p className="error-msg-style"> &#10005; {logicError}</p>}
      {loading && (
        <PropagateLoader
          color="red"
          cssOverride={{ height: "500", width: "500" }}
        />
      )}

      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className=" w-[90%]   min-h-[10rem] flex flex-col lg:grid lg:grid-cols-2  gap-3  justify-center items-center p-2"
      >
        {/* FULL NAME  */}
        <div className="form-div-style">
          <label htmlFor="fullName" className="form-label-style ">
            {/* Fullname:{" "} */}
          </label>
          <input
            type="text"
            placeholder="Fullname*"
            id="fullName"
            {...register("fullName", {
              required: { value: true, message: "Please fill this field" },
              maxLength: { value: 50, message: "Length exceeded." },
              minLength: {
                value: 4,
                message: "fullname should be more than three (3) characters.",
              },
            })}
            name="fullName"
            className={`form-input-style  ${
              errors.fullName ? "border-red-400" : "border-gray-600"
            } `}
          />
          {errors?.fullName && errors?.fullName?.type == "required" && (
            <p className="error-msg-style">{errors?.fullName?.message}</p>
          )}

          {errors?.fullName && errors?.fullName?.type == "maxLength" && (
            <p className="error-msg-style"> {errors?.fullName?.message}</p>
          )}

          {errors?.fullName && errors?.fullName?.type == "minLength" && (
            <p className="error-msg-style"> {errors?.fullName?.message}</p>
          )}
        </div>
        {/* END OF FULL-NAME */}

        {/* EMAIL  */}
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
              errors?.email ? "border-red-400" : "border-gray-600"
            } `}
          />
          {errors?.email && errors?.email?.type == "required" && (
            <p className="error-msg-style">{errors?.email?.message}</p>
          )}

          {errors?.email && errors?.email?.type == "maxLength" && (
            <p className="error-msg-style"> {errors?.email?.message}</p>
          )}

          {errors?.email && errors?.email?.type == "pattern" && (
            <p className="error-msg-style"> {errors?.email?.message}</p>
          )}
        </div>
        {/* END OF EMAIL */}

        {/* PASSWORD  */}
        <div className="form-div-style">
          <label htmlFor="password" className="form-label-style ">
            {/* Password:{" "} */}
          </label>
          <input
            type="text"
            placeholder="Password*"
            id="password"
            {...register("password", {
              required: { value: true, message: "Please fill this field" },
              maxLength: { value: 25, message: "Length exceeded." },
              minLength: {
                value: 7,
                message: "input data should be more than six (6) characters.",
              },
            })}
            name="password"
            className={`form-input-style  ${
              errors.password ? "border-red-400" : "border-gray-600"
            } `}
          />
          {errors?.password && errors?.password?.type == "required" && (
            <p className="error-msg-style">{errors?.password?.message}</p>
          )}

          {errors?.password && errors?.password?.type == "maxLength" && (
            <p className="error-msg-style"> {errors?.password?.message}</p>
          )}

          {errors?.password && errors?.password?.type == "minLength" && (
            <p className="error-msg-style"> {errors?.password?.message}</p>
          )}
        </div>
        {/* END OF PASSWORD */}

        {/*  CONFIRM PASSWORD  */}
        <div className="form-div-style">
          <label htmlFor="confirmPassword" className="form-label-style ">
            {/* Confirm Password:{" "} */}
          </label>
          <input
            type="text"
            placeholder="Confirm Password"
            id="confirmPassword"
            {...register("confirmPassword", {
              required: { value: true, message: "Please fill this field" },
              maxLength: { value: 25, message: "Length exceeded." },
              minLength: {
                value: 7,
                message: "input data should be more than six (6) characters.",
              },
              validate: (value) => value === getValues("password"),
            })}
            name="confirmPassword"
            className={`form-input-style  ${
              errors.confirmPassword ? "border-red-400" : "border-gray-600"
            } `}
          />
          {errors?.confirmPassword &&
            errors?.confirmPassword?.type == "required" && (
              <p className="error-msg-style">
                {errors?.confirmPassword?.message}
              </p>
            )}

          {errors?.confirmPassword &&
            errors?.confirmPassword?.type == "maxLength" && (
              <p className="error-msg-style">
                {" "}
                {errors?.confirmPassword?.message}
              </p>
            )}

          {errors?.confirmPassword &&
            errors?.confirmPassword?.type == "minLength" && (
              <p className="error-msg-style">
                {" "}
                {errors?.confirmPassword?.message}
              </p>
            )}

          {errors?.confirmPassword &&
            errors?.confirmPassword?.type == "validate" && (
              <p className="error-msg-style"> Password does not match.</p>
            )}
        </div>
        {/* END OF CONFIRM PASSWORD */}

        {/* SECRET QUESTIONS*/}

        <div className="form-div-style">
          <label htmlFor="secretQuestion" className="form-label-style ">
            Secret Question:{" "}
          </label>
          <select
            type="text"
            id="secretQuestion"
            {...register("secretQuestion", {
              required: { value: true, message: "Please fill this field" },
            })}
            name="secretQuestion"
            className={`form-input-style  ${
              errors.secretQuestion ? "border-red-400" : "border-gray-600"
            } `}
          >
            {" "}
            {secretQuestions.map((data) => (
              <option key={data?.id} value={data?.name}>
                {data?.name}
              </option>
            ))}
          </select>
        </div>

        {/* END OF SECRET QUESTIONS */}

        {/* SECRET ANSWER */}

        <div className="form-div-style">
          <label htmlFor="secretAnswer" className="form-label-style ">
            {/* Secret Answer:{" "} */}
          </label>
          <input
            placeholder="Secret Answer"
            type="text"
            id="secretAnswer"
            {...register("secretAnswer", {
              required: { value: true, message: "Please fill this field" },
              maxLength: { value: 50, message: "Length exceeded." },
              minLength: {
                value: 1,
                message: "input characters are too short.",
              },
            })}
            name="secretAnswer"
            className={`form-input-style  ${
              errors.secretAnswer ? "border-red-400" : "border-gray-600"
            } `}
          />
          {errors?.secretAnswer && errors?.secretAnswer?.type == "required" && (
            <p className="error-msg-style">{errors?.secretAnswer?.message}</p>
          )}

          {errors?.secretAnswer &&
            errors?.secretAnswer?.type == "maxLength" && (
              <p className="error-msg-style">
                {" "}
                {errors?.secretAnswer?.message}
              </p>
            )}

          {errors?.secretAnswer &&
            errors?.secretAnswer?.type == "minLength" && (
              <p className="error-msg-style">
                {" "}
                {errors?.secretAnswer?.message}
              </p>
            )}
        </div>

        {/* END OF SECRET ANSWER */}
        <input
          type="submit"
          disabled={loading && true}
          value="Let's Go"
          className={` ${
            loading ? "bg-gray-400" : "bg-red-500"
          } text-white  text-xl tracking-wide   mx-auto block  px-[2rem]  py-[0.2rem]  text-[0.9rem]  font-serif  lg:col-span-2`}
        />
      </form>
      <p>
        Already have an account?{" "}
        <Link to="/login" className=" text-blue-600  text-bold tracking-wide ">
          Sign in
        </Link>
      </p>
    </main>
  );

  return content;
}
