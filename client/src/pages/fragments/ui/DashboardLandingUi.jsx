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
import { GiTakeMyMoney } from "react-icons/gi";
import { PiHandDepositDuotone } from "react-icons/pi";
import tradephone from "../../../assets/tradephone.jpg";
import btcrise from "../../../assets/btcrise.jpg";
import { motion } from "framer-motion";
import { domain } from "../../../data.js";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

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

  const profitPercentage =
    isNaN(Number(profit)) == true ? "00" : Math.floor(profit);

  console.log(profitPercentage);

  let loss =
    (Number(100) / Number(serverData?.balance)) * Number(serverData?.loss);

  const lossPercentage = isNaN(Number(loss)) == true ? "00" : Math.floor(loss);
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
    <main className="w-full  min-h-screen  bg-white text-black flex flex-col justify-start  items-center ">
      <section className="min-w-full   rounded-b-lg     flex  gap-4 flex-col justify-around items-center ">
        <div className=" w-full    mx-auto grid grid-cols-1  gap-4   rounded-lg  sm:grid-cols-2  p-2 ">
          <div className="child-value-container">
            <span className="dash-data-style">Balance:</span>
            <span> &#36;{serverData?.balance}</span>
          </div>
          <div className="child-value-container">
            <span className="dash-data-style">Invested:</span>
            <span>&#36;{serverData?.invested}</span>
          </div>
          <div
            className="child-value-container "
            style={{ backgroundColor: "black", color: "white" }}
          >
            <span className="dash-data-style">
              Profit
              <sub className="text-green-500 underline underline-offset-1 mx-2">
                {"("}&#37;{profitPercentage}
                {")"}
              </sub>
              :
            </span>
            <span>
              &#36;{serverData?.profit}{" "}
              <sub
                className={`text-green-500 ml-1   ${
                  profitPercentage == "00" ? "invisible" : "visible"
                } `}
              >
                &#10138;
              </sub>
            </span>
          </div>
          <div
            className="child-value-container"
            style={{ backgroundColor: "black", color: "white" }}
          >
            <span className="dash-data-style">
              Loss
              <sub className="text-red-500   underline underline-offset-1  mx-2">
                {"("} &#37;{lossPercentage}
                {")"}
              </sub>
              :
            </span>
            <span>
              &#36;{serverData?.loss}
              <sub
                className={`text-red-500  ml-1 ${
                  lossPercentage == "00" ? "invisible" : "visible"
                }`}
              >
                &#10136;
              </sub>
            </span>
          </div>
        </div>
        <div className="w-[90%]  mx-auto flex justify-around items-center p-2  gap-[1rem]  ">
          <Link
            to="/dashboard/withdraw"
            className="add-rem-style  font-bold border-2  border-[#1f1f1f] shadow-xl shadow-gray-700 "
          >
            <GiTakeMyMoney className="text-[2rem]   text-red-500" />
            <p>Withdraw</p>
          </Link>
          <Link
            to="/dashboard/deposit"
            className="add-rem-style  font-bold border-2  border-[#1f1f1f]  shadow-xl shadow-gray-700 "
          >
            <PiHandDepositDuotone className="text-[2rem]  text-green-700" />
            <p>Deposit</p>
          </Link>
        </div>
      </section>

      <hr className="bg-black w-[50%] sm:w-[20%] my-[0.7rem] mx-auto " />

      {/* tradingview widget  */}

      <div className="w-[95%] h-[20rem]  mx-auto">
        <TradingViewWidget
          symbol="BITSTAMP:BTCUSD"
          theme={Themes.LIGHT}
          locale="en"
          autosize
        />
      </div>
      {/* TAKE ADVANTAGE OF THE BULLISH BTC */}

      <motion.section
        animate={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="w-[90%]  mx-auto my-[1rem] "
      >
        <motion.h2
          animate={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="min-w-fit  text-center  sm:text-center mx-auto  text-gray-600 text-[1.5rem]  font-serif"
        >
          Always taking advantage of the bullish & bearish markets
        </motion.h2>

        <motion.article
          animate={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className=" w-full    bg-center bg-cover bg-no-repeat  flex flex-col sm:flex-row justify-center  items-center  gap-3    "
        >
          <div className="w-full h-full  ">
            <img src={btcrise} alt="belief" className="w-full  h-full" />
          </div>
          <div className="w-full h-full   flex flex-col    justify-center  items-center gap-3    text-left  p-[1rem]  bg-gradient-to-b text-gray-400 from-transparent  from-80% to-white  ">
            <p className="my-[1rem]">
              Our professional approach emphasizes strategic analysis and risk
              management to capitalize on opportunities regardless of market
              trends. By maintaining a disciplined trading strategy and
              diligently monitoring market dynamics, we aim to maximize gains
              and minimize potential losses in all market scenarios.
            </p>
            <p>
              Our commitment to remaining informed, agile, and focused enables
              us to thrive in both favorable and challenging market conditions,
              ensuring a sustainable and successful investment journey for our
              clients.
            </p>
          </div>
        </motion.article>
      </motion.section>

      {/* trade phone */}

      <motion.section
        animate={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="w-[90%]  mx-auto  "
      >
        <motion.h2
          animate={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="min-w-fit  text-center text-gray-600  sm:text-center mx-auto  text-[2rem]  font-serif"
        >
          Fast & Efficient trading strategies
        </motion.h2>

        <motion.article
          animate={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className=" w-full    bg-center bg-cover bg-no-repeat  flex flex-col sm:flex-row justify-center  items-center  gap-3    "
        >
          <div className="w-full h-full  ">
            <img src={tradephone} alt="belief" className="w-full  h-full" />
          </div>
          <div className="w-full h-full  text-gray-400  flex flex-col    justify-center  items-center gap-3    text-left  p-[1rem]  bg-gradient-to-b  from-transparent  from-80% to-white  ">
            <p className="my-[1rem]">
              We excel in delivering top-notch results with precision and
              expertise. Employing cutting-edge technology and a deep
              understanding of the market dynamics, timelytraders leverage their
              analytical skills to make swift decisions that yield high returns.
            </p>
            <p>
              By staying ahead of market trends and adopting agile techniques,
              we showcase professionalism in executing trades promptly and
              maximizing profit opportunities.
            </p>
          </div>
        </motion.article>
      </motion.section>

      {/* <section className="text-white">
        <h1>Trade Performance Overview</h1>
        <Chart
          chartType="ComboChart"
          width="100%"
          height="400px"
          data={comboChartData}
          options={comboChartOptions}
        />
      </section> */}
      {/* <section className="w-full ">
        <h1>General Performance Overview</h1>

        <Chart
          chartType="PieChart"
          data={pieChartData}
          options={pieChartOptions}
          width={"100%"}
          height={"200px"}
        />
      </section> */}
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
