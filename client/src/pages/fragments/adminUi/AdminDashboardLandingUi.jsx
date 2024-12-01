import { SimpleGauge } from "react-gauges";
// import ReactPlayer from "react-player";
import { Chart } from "react-google-charts";
import { useOutletContext, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useRouteProtect from "../../../hooks/useRouteProtect";
import { FaMinusCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import axios from "../../../api/axios";
import { errorMsg } from "../../../helper/errorMsg";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
// import useAuth from "../../../hooks/useAuth";

export default function AdminDashboardLandingUi() {
  const { auth, setAuth } = useOutletContext();
  const navigate = useNavigate();
  const [isAllowed, setIsAllowed] = useState(false);
  const [serverData, setServerData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const axiosPrivate = useAxiosPrivate();
  // const { setAuth } = useAuth();

  // console.log(auth);

  // useEffect(() => {
  //   const protector = () => {
  //     console.log(auth?.accessToken);
  //     if (typeof auth?.accessToken === "undefined") {
  //       navigate("/login");
  //     } else {
  //       setIsAllowed(true);
  //     }
  //   };

  //   protector();
  // }, []);

  useRouteProtect(auth?.accessToken, setIsAllowed);

  console.log(auth?.id);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axiosPrivate.get("/allusers");
        // console.log(response);
        if (response?.status != 200) {
          setErrorMessage(
            response?.data?.message ? response?.data?.message : response?.data
          );
        }

        ignore === true && setServerData(response?.data);
      } catch (error) {
        // console.log(error);
        const err = errorMsg(error);
        setErrorMessage(errorMessage);
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

  // useRouteProtect(auth?.accessToken, setIsAllowed);

  // COMBOCHART SETTING
  const comboChartData = [
    [
      "Month",
      "Love in the air",
      "tribute to poverty",
      "Rocky love",
      "Heart of a child",
      "Love birds",
      "The lifting hand",
    ],
    ["2024/05", 165, 938, 522, 998, 450, 614.6],
    // ["2005/06", 135, 1120, 599, 1268, 288, 682],
    // ["2006/07", 157, 1167, 587, 807, 397, 623],
    // ["2007/08", 139, 1110, 615, 968, 215, 609.4],
    // ["2008/09", 136, 691, 629, 1026, 366, 569.6],
  ];

  const comboChartOptions = {
    title: "Most streamed songs for the month.",
    vAxis: {
      title: "Song stream",
      textStyle: { color: "white" },
      titleTextStyle: { color: "white" },
    },
    hAxis: {
      title: "Month",
      textStyle: { color: "white" },
      titleTextStyle: { color: "white" },
    },

    seriesType: "bars",
    series: { 5: { type: "line" } },
    backgroundColor: "black",
    legendTextStyle: { color: "white" },

    titleTextStyle: { color: "white", fontSize: 12, wordSpacing: 4 },
  };

  // PIE CHART SETTING
  const pieChartData = [
    ["Artists", "Rate"],
    ["showdy", 11],
    ["Tees", 2],
    ["Roote", 2],
    ["Carter", 2],
    ["Smill", 7],
  ];

  const pieChartOptions = {
    title: "Artist recorgnition chart",
    is3D: true,
    titleTextStyle: { color: "white", fontSize: 12 },
    backgroundColor: "black",
    legendTextStyle: { color: "white" },
  };

  // const { allUsers } = serverData?.allUsers;

  // console.log();
  const totalInvstors =
    serverData?.allUsers && serverData?.allUsers.length != 0
      ? serverData?.allUsers.length
      : 0;

  // const checkAlert = (arr, depAlert, withAlert) => {

  //   let alert;
  //   if (arr && arr.length != 0) {
  //     arr.map(data => {
  //       if (data.depAlert === true) {
  //         alert
  //       }
  //     })
  //   }
  // }

  // console.log(serverData);
  // DEPOSIT ALERT
  const depositAlert =
    serverData?.allUsers && serverData?.allUsers.length != 0
      ? serverData?.allUsers.filter((el) => el.depositAlert === true).length
      : 0;

  // WITHDRAWAL ALERT
  const withdrawaltAlert =
    serverData?.allUsers && serverData?.allUsers.length != 0
      ? serverData?.allUsers.filter((el) => el.withdrawalReq === true).length
      : 0;

  const usersWithDeposit =
    serverData?.allUsers && serverData?.allUsers.length != 0
      ? serverData?.allUsers.filter((el) => el.depositAlert === true)
      : 0;

  // setAuth((p) => ({ ...p, usersWithDeposit }));

  // console.log(usersWithDeposit);
  // console.log(depositAlert);
  // console.log(withdrawaltAlert);

  const content = (
    <main className="w-full  min-h-screen bg-black text-white flex flex-col justify-center  items-center ">
      <section className="min-w-full   rounded-b-lg     flex  gap-4 flex-col justify-around items-center ">
        <div className=" w-full    mx-auto grid grid-cols-1  gap-4   rounded-lg  md:grid-cols-4  p-2 ">
          <div className="child-value-container">
            <span className="dash-data-style">Investors</span>
            <span>{totalInvstors}</span>
          </div>
          <div className="child-value-container">
            <span className="dash-data-style">Invested</span>
            <span>$2300.00</span>
          </div>
          <Link
            to="/admin-dashboard/depositUi"
            className="child-value-container"
          >
            <span className="dash-data-style">Deposit Alert</span>
            <span>{depositAlert}</span>
          </Link>
          <Link
            to="/admin-dashboard/withdrawalUi"
            className="child-value-container"
          >
            <span className="dash-data-style">Withdraw Alert </span>
            <span>{withdrawaltAlert} </span>
          </Link>
        </div>
        {/* <div className="w-[90%]  mx-auto flex justify-around items-center p-2   ">
          <Link
            to="/admin-dashboard/users"
            className="add-rem-style  border-yellow-500"
          >
            <FaUsers className="text-[2rem]" />
            <p>Users</p>
          </Link> */}
        {/* <Link className="add-rem-style  border-green-500">
            <FaPlusCircle className="text-[2rem]" />
            <p>Deposit</p>
          </Link> */}
        {/* </div> */}
      </section>
      {/* <section className="w-[80%]  mx-auto  p-3     flex justify-center  items-center">
        <SimpleGauge value={50} maxLimit={1000} style={{ color: "white" }} />
      </section> */}
      <section className="text-white">
        <h1>task Performance Overview</h1>
        <Chart
          chartType="ComboChart"
          width="100%"
          height="400px"
          data={comboChartData}
          options={comboChartOptions}
        />
      </section>
      <section className="w-full ">
        <h1>task Performance Overview</h1>

        <Chart
          chartType="PieChart"
          data={pieChartData}
          options={pieChartOptions}
          width={"100%"}
          height={"200px"}
        />
      </section>
      {/* <section className="w-[80%]  mx-auto">
        <ReactPlayer
          controls={true}
          width="200px"
          url="https://music.youtube.com/watch?v=yzlimynH6VQ&list=OLAK5uy_nttQznNM9HQVsrAPFRuO_vo3ZWzgXGAnY"
        />
      </section> */}
    </main>
  );

  return isAllowed === true && content;
  // return content;
}

// LINKS TO CHART TEMPLATE SETUP

// https://codesandbox.io/s/github/RakanNimer/react-google-charts/tree/master/sandboxes/combo-chart/default?from-embed=&file=/App.tsx:85-649
