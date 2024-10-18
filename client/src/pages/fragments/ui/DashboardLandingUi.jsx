import { SimpleGauge } from "react-gauges";
// import ReactPlayer from "react-player";
import { Chart } from "react-google-charts";
import { useOutletContext, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useRouteProtect from "../../../hooks/useRouteProtect";
import { FaMinusCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { errorMsg } from "../../../helper/errorMsg";
import axios from "../../../api/axios";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

export default function DashboardLandingUi() {
  const { auth, setAuth } = useOutletContext();
  const navigate = useNavigate();
  const [isAllowed, setIsAllowed] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const [errMessage, setErrMessage] = useState();
  const [serverData, setServerData] = useState();
  const axiosPrivate = useAxiosPrivate();

  console.log(auth);

  useRouteProtect(auth?.accessToken, setIsAllowed);

  // FETCHING USER DATA
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axiosPrivate(`/singleuser/${auth?.id}`);

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
  }, []);

  console.log(serverData);

  let profit =
    (Number(100) / Number(serverData?.balance)) * Number(serverData?.profit);

  let loss =
    (Number(100) / Number(serverData?.balance)) * Number(serverData?.loss);

  console.log(Math.floor(profit));
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

  // useRouteProtect(auth?.accessToken, setIsAllowed);

  // COMBOCHART SETTING
  const comboChartData = [
    ["Month", "Ethereum", "Xrp", "Bitcoin", "Litecoin"],
    ["2024/05", 165, 450, 900, 614.6],
    // ["2005/06", 135, 1120, 599, 1268, 288, 682],
    // ["2006/07", 157, 1167, 587, 807, 397, 623],
    // ["2007/08", 139, 1110, 615, 968, 215, 609.4],
    // ["2008/09", 136, 691, 629, 1026, 366, 569.6],
  ];

  const comboChartOptions = {
    title: "Market recent trade performance.",
    vAxis: {
      title: "Trade Performance",
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
    ["Crypto", "Rate"],
    ["Bitcoin", 11],
    ["Ethereum", 2],
    ["Solana", 2],
    ["Xrp", 2],
    ["Litecoin", 7],
  ];

  const pieChartOptions = {
    title: "Most traded digital assets",
    is3D: true,
    titleTextStyle: { color: "white", fontSize: 12 },
    backgroundColor: "black",
    legendTextStyle: { color: "white" },
  };

  const content = (
    <main className="w-full  min-h-screen bg-black text-white flex flex-col justify-center  items-center ">
      <section className="min-w-full   rounded-b-lg     flex  gap-4 flex-col justify-around items-center ">
        <div className=" w-full    mx-auto grid grid-cols-2  gap-4   rounded-lg  md:grid-cols-4  p-2 ">
          <div className="child-value-container">
            <span className="dash-data-style">Balance</span>
            <span> &#36;{serverData?.balance}</span>
          </div>
          <div className="child-value-container">
            <span className="dash-data-style">Invested</span>
            <span>&#36;{serverData?.invested}</span>
          </div>
          <div className="child-value-container">
            <span className="dash-data-style">
              Profit
              <sup className="text-green-500 underline underline-offset-1 ml-2">
                &#37;{Math.floor(profit)}
              </sup>
            </span>
            <span>
              &#36;{serverData?.profit}{" "}
              <sub className="text-green-500 ml-1 ">&#10138;</sub>
            </span>
          </div>
          <div className="child-value-container">
            <span className="dash-data-style">
              Loss
              <sup className="text-red-500   underline underline-offset-1  ml-2">
                &#37;{Math.floor(loss)}
              </sup>
            </span>
            <span>
              &#36;{serverData?.loss}
              <sub className="text-red-500  ml-1">&#10136;</sub>
            </span>
          </div>
        </div>
        <div className="w-[90%]  mx-auto flex justify-around items-center p-2   ">
          <Link
            to="/dashboard/withdraw"
            className="add-rem-style  border-blue-500"
          >
            <FaMinusCircle className="text-[2rem]" />
            <p>Withdraw</p>
          </Link>
          <Link
            to="/dashboard/deposit"
            className="add-rem-style  border-green-500"
          >
            <FaPlusCircle className="text-[2rem]" />
            <p>Deposit</p>
          </Link>
        </div>
      </section>
      {/* <section className="w-[80%]  mx-auto  p-3     flex justify-center  items-center">
        <SimpleGauge value={50} maxLimit={1000} style={{ color: "white" }} />
      </section> */}
      <section className="text-white">
        <h1>Trade Performance Overview</h1>
        <Chart
          chartType="ComboChart"
          width="100%"
          height="400px"
          data={comboChartData}
          options={comboChartOptions}
        />
      </section>
      <section className="w-full ">
        <h1>General Performance Overview</h1>

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
