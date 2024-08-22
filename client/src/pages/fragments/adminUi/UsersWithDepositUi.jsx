import useAuth from "../../../hooks/useAuth";
import { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import axios from "../../../api/axios";
import { errorMsg } from "../../../helper/errorMsg";
import copy from "clipboard-copy";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useRouteProtect from "../../../hooks/useRouteProtect";

export default function UsersWithDepositUi() {
  const [uwdUi, setUwdUi] = useState({});
  const [showDetails, setShowDetails] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const [isAllowed, setIsAllowed] = useState(false);
  const { auth } = useOutletContext();

  // console.log(auth);

  useRouteProtect(auth?.accessToken, setIsAllowed);

  // GETTING USERS

  useEffect(() => {
    const fetchData = async () => {
      setUwdUi((p) => ({ ...p, isError: false, isLoading: true }));
      try {
        const response = await axiosPrivate.get("/allusers");

        console.log(response);

        if (response?.status != 200) {
          setUwdUi((p) => ({
            ...p,
            isError: true,
            errMsg: response?.data?.message
              ? response?.data?.message
              : response?.data,
          }));
        }

        ignore === false &&
          setUwdUi((p) => ({
            ...p,
            isError: false,
            serverRes: response?.data,
          }));
      } catch (error) {
        const err = errorMsg(error);
        setUwdUi((p) => ({ ...p, isError: false, errMsg: err }));
      } finally {
        setUwdUi((p) => ({ ...p, isError: false, isLoading: false }));
      }
    };

    let ignore = false;
    fetchData();

    return () => {
      ignore = true;
    };
  }, [uwdUi.updateUi]);

  const remove = async (userId) => {
    setUwdUi((p) => ({ ...p, isError: false, isLoading: true }));
    try {
      const res = await axiosPrivate.patch(`seendeposit/${userId}`);
      console.log(res);

      if (res?.status != 200) {
        setUwdUi((p) => ({
          ...p,
          isError: true,
          errMsg: res?.data,
        }));
      }

      if (res?.status === 200) {
        setUwdUi((p) => ({
          ...p,
          isError: false,
          delSuccMsg: res?.data,
          updateUi: true,
        }));
      }
    } catch (error) {
      const err = errorMsg(error);
      setUwdUi((p) => ({ ...p, isError: false, errMsg: err }));
    } finally {
      setUwdUi((p) => ({
        ...p,
        isError: false,
        isLoading: false,
        updateUi: false,
      }));
    }
  };

  // console.log(serverData);

  console.log(uwdUi);

  const userWithDepositAlert =
    uwdUi?.serverRes?.allUsers &&
    uwdUi?.serverRes?.allUsers.length != 0 &&
    uwdUi?.serverRes?.allUsers.filter((dt) => dt?.depositAlert === true)
      .length != 0
      ? uwdUi?.serverRes?.allUsers.filter((dt) => dt?.depositAlert === true)
      : 0;

  console.log(userWithDepositAlert);
  const content = (
    <main className="min-h-screen  w-full  flex justify-center items-center   text-white bg-black">
      <section className="w-[98%]  p-2  flex flex-col justify-center items-center   mx-auto">
        <h2 className=" font-bold tracking-wider my-4 uppercase ">
          Users with deposit claim
        </h2>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="bg-[#286e22] my-3 mx-auto font-bold p-1 rounded-md text-center tracking-wide  text-white "
        >
          {" "}
          {!showDetails ? "Show Details" : "Hide Details"}
        </button>

        <hr className="w-[50%]  my-4 mx-auto bg-gray-300" />

        <ul className="w-[98%] mx-auto  text-center  flex flex-col justify-around  gap-5  items-center">
          {userWithDepositAlert != 0 ? (
            userWithDepositAlert.map((data) => (
              <li
                key={data._id}
                className=" min-w-full  flex flex-col justify-center shadow-lg shadow-gray-300 items-center "
              >
                <ul
                  className={`min-w-full  ${
                    showDetails ? "block" : "hidden"
                  }  mx-auto text-white  flex flex-col justify-around items-center `}
                >
                  <li>
                    Full Name: <span>{data?.fullName}</span>
                  </li>
                  <li>
                    Email: <span>{data?.fullName}</span>
                  </li>
                  <li>
                    Wallet Type: <span>{data?.depositWalletType} Wallet</span>
                  </li>
                  <li className="min-w-full    ">
                    {data?.depositWalletType} Wallet Address:{" "}
                    <span
                      onClick={() => copy(data?.depositWalletAddr)}
                      className="min-w-fit bg-yellow-600    h-[2rem]  rounded-md text-white p-1   "
                    >
                      &#10063; Copy Wallet
                    </span>
                  </li>
                  <li>Balance: {data?.balance}</li>
                  <li>Deposited Amount: {data?.depositedAmount}</li>
                  <li>
                    {" "}
                    <span className="text-green-500">
                      &#10166;{" "}
                    </span> Profit: {data?.profit}
                  </li>{" "}
                  <li>
                    {" "}
                    <span className="text-red-500">&#10164;</span> Loss:{" "}
                    {data?.loss}
                  </li>
                </ul>

                <button
                  onClick={() => remove(data?._id)}
                  className="bg-[#671f1f]  font-bold p-1 rounded-md text-center tracking-wide  text-white "
                >
                  {!showDetails ? data?.fullName : "Remove"} &#10007;
                </button>
              </li>
            ))
          ) : (
            <li>No Alerts to Show</li>
          )}
        </ul>
      </section>
    </main>
  );

  return isAllowed === true && content;
  // return content;
}
