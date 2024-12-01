import singer from "../assets/singernobg.png";
import coins from "../assets/coinsinphone.png";
import crypto from "../assets/cryptos-removebg-preview.png";
import investnow from "../assets/cryptobg.jpg";
import balance from "../assets/walletballance-removebg-preview.png";
import success from "../assets/success.jpg";
import {
  domain,
  investmentPlans,
  numberData,
  userTestimonial,
  tradingPriviledges,
  whyChooseUs,
} from "../data";
// import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import axios from "../api/axios";
import ScaleLoader from "react-spinners/ScaleLoader";
import { errorMsg } from "../helper/errorMsg";
import { Link } from "react-router-dom";
import { MdSecurity } from "react-icons/md";
import { SiHackaday } from "react-icons/si";
import { BsCurrencyExchange } from "react-icons/bs";
import { GiShieldReflect } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";
import experts from "../assets/experts.jpg";
import security from "../assets/security.jpg";
import trade from "../assets/trade.jpg";
import { IoStar } from "react-icons/io5";
import { SiYoutubemusic } from "react-icons/si";
import { IoSearchSharp } from "react-icons/io5";
import belief from "../assets/illustrate.jpg";
import company from "../assets/company.jpg";
import tradebg from "../assets/tradebg.jpg";
import tradeTime from "../assets/tradetime.jpg";
import tradepc from "../assets/tradepcnobg.png";
import connect from "../assets/connection.jpg";
import pay from "../assets/pay.jpg";
import startnow from "../assets/startnow.jpg";
import choosepl from "../assets/choosepl.jpg";
import { motion } from "framer-motion";

export default function LandingPage() {
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [allSongs, setAllsongs] = useState();
  const [width, setWidth] = useState(window.innerWidth);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    // const script = document.createElement("script");
    // script.src = "//code.tidio.co/tsxe0jxicyh6jqofkheftwzluxeyiloo.js";
    // script.async = true;
    // document.body.appendChild(script);

    // for tawk

    // <!--Start of Tawk.to Script-->
    // const script = document.createElement("script")
    // script.src = "//code.tidio.co/tsxe0jxicyh6jqofkheftwzluxeyiloo.js";

    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/674b18d62480f5b4f5a6266a/1iduli25l";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();

    // Cleanup function to remove the script when the component unmounts
    return () => {
      // document.body.removeChild(script);
    };
  }, []);

  //   <!--Start of Tawk.to Script-->
  // <script type="text/javascript">
  // var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  // (function(){
  // var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  // s1.async=true;
  // s1.src='https://embed.tawk.to/674b18d62480f5b4f5a6266a/1iduli25l';
  // s1.charset='UTF-8';
  // s1.setAttribute('crossorigin','*');
  // s0.parentNode.insertBefore(s1,s0);
  // })();
  // </script>
  // <!--End of Tawk.to Script-->

  // FOR CAROUSEL config

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    className: "flex ",
  };

  // FOR CAROUSELS DIFFERENT SCREEN VIEWS

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const content = (
    <main className="min-h-screen w-full  flex flex-col gap-4  z-0">
      <motion.section
        // initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={` w-full h-[30rem] bg-black text-white flex   justify-center items-center    bg-cover    bg-center bg-no-repeat  `}
        style={{ backgroundImage: `url(${investnow})` }}
      >
        <div className=" w-full  h-full  pt-[1rem]  pl-[1rem]     bg-gradient-to-b  from-transparent from-70% to-white   flex flex-col  md:flex-row justify-start  items-start   ">
          <motion.h2
            animate={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className=" w-[90%] sm:w-[50%]  px-3   text-transparent bg-clip-text  bg-gradient-to-r  from-red-700 to-green-700  place-content-center  tracking-wide font-serif text-[1.5rem]  sm:text-[2rem]   text-center md:text-left  "
          >
            Maximise your investment growth today with {" "}
            <span className="text-black  capitalize">{domain}</span>.
          </motion.h2>
        </div>
      </motion.section>

      {/* trading widget */}

      {/* ENJOY TECH ENJOY INVESTING  */}

      <motion.section
        animate={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="w-[90%]  mx-auto my-[1rem]  min-h-full text-left  sm:text-center "
      >
        <h2 className="font-bold  text-opacity-80   my-[1rem] capitalize  text-red-500">
          Enjoy Tech. Enjoy Investing
        </h2>
        <p className="font-light sm:w-[70%]  sm:mx-auto text-gray-500">
          20% commission and $1000 minimum deposit. Everyone gets smart tools
          for smart investing. With the most reliable and simplified investment
          management performs that mine cryptocurrency, indices and trades
          forex.{" "}
        </p>

        <Link className="bg-red-500    m-[1rem] inline-block  rounded-md shadow-md shadow-gray-500 px-[1rem]  capitalize text-white  py-2  ">
          Get started
        </Link>
        <Link className="bg-green-500  bg-opacity-80    m-[1rem] inline-block  rounded-md shadow-md shadow-gray-500 px-[1rem]  capitalize text-black  py-2  ">
          {" "}
          Read More
        </Link>
      </motion.section>

      <motion.section
        animate={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-[90%]  my-[4rem]  mx-auto text-left sm:text-center  "
      >
        <h2 className="text-red-500 font-serif text-[2rem]  tracking-wide ">
          Trading Privileges
        </h2>
        <h5 className="  sm:w-[70%]  mx-auto   font-extralight tracking-wide  ">
          Diversifying your portfolio with a comprehensive suite of investment
          products including stocks, fractional shares, options, ETFs, and ADRs.
        </h5>

        <ul className=" w-[98%] mx-auto  grid grid-cols-1  sm:grid-cols-2  lg:grid-cols-4 my-[1rem] place-content-center  gap-4    ">
          {tradingPriviledges.map((data) => (
            <motion.li
              key={data.id}
              animate={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className=" w-[90%] mx-auto  min-h-[14rem]  lg:h-[18rem]    p-[0.8rem]  bg-opacity-20 bg-blue-500  "
            >
              <div className=" flex   flex-col  justify-around    items-center gap-3">
                <h4 className="font-serif">{data.name}</h4>
                {data.icon}
                <p className="p-[0.4]  text-[0.9]">{data.msg}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/*financial freedom  */}

      <motion.section
        animate={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-[90%] text-left sm:text-center   mx-auto"
      >
        <h2 className="text-[1.4rem]  my-[1rem]  mx-auto font-serif">
          Route to Sustainable Financial Freedom
        </h2>

        <div className="flex   flex-col sm:flex-row  justify-around  items-center  gap-2">
          <div className="w-full  ">
            <img src={trade} alt="phone" className="w-full h-full" />
          </div>

          <div>
            <p>
              {domain} markets has been growing fast by expanding trade industry
              and cryptocurrency Exchange Performed by Qualified Professional
              Traders. Let Our Pro Trade For You
            </p>

            <Link className="bg-red-500    m-[1rem] inline-block  rounded-md shadow-md shadow-gray-500 px-[1rem]  capitalize text-white  py-2  ">
              Get started
            </Link>
            <Link className="bg-green-500  bg-opacity-80    m-[1rem] inline-block  rounded-md shadow-md shadow-gray-500 px-[1rem]  capitalize text-black  py-2  ">
              {" "}
              Read More
            </Link>
          </div>
        </div>
      </motion.section>

      {/* TESTIMONIALS */}
      <section className="w-full  my-[5rem] ">
        <h2 className="w-fit mx-auto text-[1.5rem]  my-[1rem]  font-serif   tracking-wide">
          Client Reviews
        </h2>

        <div className="  w-[90%] min-h-[10rem] mx-auto  py-2  my-4 flex justify-around  gap-4  items-center  overflow-scroll">
          {userTestimonial.map((data) => (
            <figure
              key={data.id}
              className=" min-w-[70%]  h-[30rem]  border-t-2  text-gray-400  border-t-red-500 bg-gray-100   py-2  flex  gap-4  flex-col justify-around  items-center   shadow-lg shadow-gray-500"
            >
              <img
                src={data.imgUrl}
                alt="user-image"
                width={50}
                height={50}
                className="rounded-full"
              />

              <hr className="bg-gray-600  w-[50%]   mx-auto" />

              <p className="min-w-full mx-auto  p-2  my-1 text-center ">
                &#10077;{data.msg} &#10078;
              </p>

              <hr className="bg-gray-600  w-[20%]   mx-auto" />

              <figcaption className="font-bold  tracking-wide">
                {data.name}
              </figcaption>
              <div className=" w-[50%] gap-3 flex justify-around items-center">
                <IoStar className="text-[1.2rem]  text-yellow-500" />
                <IoStar className="text-[1.2rem]  text-yellow-500" />
                <IoStar className="text-[1.2rem]  text-yellow-500" />
                <IoStar className="text-[1.2rem]  text-yellow-500" />
                <IoStar className="text-[1.2rem]  text-yellow-500" />
              </div>
            </figure>
          ))}
        </div>
      </section>

      <motion.section
        animate={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="w-[90%]  mx-auto "
      >
        <motion.h1
          animate={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="  min-w-fit  text-[1.5rem] sm:text-center  font-serif  tracking-wide my-[1rem] mx-auto text-red-500 "
        >
          Why Choose Us
        </motion.h1>

        <ul className=" w-[98%] mx-auto   grid grid-cols-1  sm:grid-cols-2     my-[1rem] place-content-center  gap-3    ">
          {whyChooseUs.map((data) => (
            <motion.li
              animate={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              key={data.id}
              className=" w-[90%] mx-auto        p-[0.8rem]  bg-opacity-20 shadow-md  shadow-gra-500 rounded-[1rem]  bg-white text-gray-400 "
            >
              <div className=" flex  text-center flex-col  justify-around  items-center gap-3">
                <h4 className="font-serif  font-[1.1rem]   text-gray-600 tracking-wide ">
                  {data.name}
                </h4>
                {data.icon}
                <p>{data.msg}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* OUR BELIEF */}
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
          className="min-w-fit  text-left  sm:text-center mx-auto  text-[2rem]  font-serif"
        >
          Our Belief
        </motion.h2>

        <motion.article
          animate={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className=" w-full    bg-center bg-cover bg-no-repeat  flex flex-col sm:flex-row justify-center  items-center  gap-3    "
        >
          <div className="w-full h-full  ">
            <img src={belief} alt="belief" className="w-full  h-full" />
          </div>
          <div className="w-full h-full   flex flex-col    justify-center  items-center gap-3    text-left  p-[1rem]  bg-gradient-to-b  from-transparent  from-80% to-white  ">
            <p className="my-[1rem]">
              Individuals are an important part of the market and should not be
              ignored. They should be empowered with better information, tools,
              services, opportunities, and lower costs. Respecting the investor
              is respecting the market.
            </p>
            <p>
              Technology is the investor’s best friend. It vastly expands the
              human’s trading capabilities in terms of time, scale, and
              technique. Technology is the future.
            </p>
          </div>
        </motion.article>
      </motion.section>

      {/* legal companies */}

      <motion.section
        animate={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="w-[90%]  my-[5rem]  mx-auto  "
      >
        <motion.h2
          animate={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="min-w-fit  my-[1rem] text-left  sm:text-center mx-auto  text-[1.5rem]  font-serif"
        >
          Legal Company
        </motion.h2>

        <article className=" w-full    bg-center bg-cover bg-no-repeat  flex flex-col sm:flex-row justify-center  items-center  gap-3    ">
          {/* <div className="w-full h-full  ">
            <img src={belief} alt="belief" className="w-full  h-full" />
          </div> */}
          <motion.p
            animate={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className=" w-full sm:w-[70%]   p-3  tracking-wide  "
          >
            {domain} markets Financial LLC is registered with and regulated by
            the Securities and Exchange Commission (SEC) and the Financial
            Industry Regulatory Authority (FINRA). It is also a member of the
            SIPC, which protects (up to $500,000, which includes a $250,000
            limit for cash) against the loss of cash and securities held by a
            customer at a financially-troubled SIPC-member brokerage firm.
            <Link className="bg-green-500  bg-opacity-80    m-[1rem] inline-block  rounded-md shadow-md shadow-gray-500 px-[1rem]  capitalize text-black  py-2  ">
              {" "}
              Read More
            </Link>
          </motion.p>

          <div className="w-full h-full  ">
            <img src={company} alt="company" className="w-full  h-full" />
          </div>
        </article>
      </motion.section>

      {/* world class forex */}

      <motion.section
        animate={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="w-[99%]  p-[1rem] border-r-4  border-r-red-500 border-t-4 border-t-red-500  bg-gradient-to-b  sm:bg-gradient-to-l  from-gray-200  to-60%   to-transparent   text-black   my-[5rem]  mx-auto  "
      >
        {/* <h2 className="min-w-fit  my-[1rem] text-left  sm:text-center mx-auto  text-[1.5rem]  font-serif">
          Legal Company
        </h2> */}

        <article className=" w-full  sm:w-[99%]     mx-auto  flex flex-col sm:flex-row justify-around  items-center  gap-3    ">
          {/* <div className="w-full h-full  ">
            <img src={belief} alt="belief" className="w-full  h-full" />
          </div> */}
          <div className=" w-full   flex flex-col  justify-center  items-center gap-3 ">
            <h2 className="text-[1.5rem] p-[0.7rem] font-serif   bg-clip-text  text-transparent  bg-gradient-to-r  from-red-800 to-green-800">
              World class forex trading and capital investment company{" "}
            </h2>

            <div className="w-full  sm:hidden    border-none rounded-full bg-gradient-to-b  from-transparent  from-70%  to-gray-300  ">
              <img src={tradepc} alt="tradepc" className="w-full  h-full" />
            </div>
            <p className=" w-full  p-[0.7rem] border-l-2  border-l-green-500   border-t-2  border-t-green-500   font-light  text-[1.1rem]  text-gray-600      tracking-wide  ">
              Established with the vision of impacting the general populace with
              the knowledge of trading Forex and creating platforms that will
              bring about sustainable financial freedom. With over 10 thousand
              active investors, more than 10 business locations in London and
              our new offices in the United Arab Emirates (UAE) and the United
              Kingdom (UK)
            </p>
          </div>

          <div className="w-full   hidden  sm:block    border-none rounded-full bg-gradient-to-b  from-transparent  from-70%  to-gray-300   ">
            <img src={tradepc} alt="tradepc" className="w-full    h-full" />
          </div>
        </article>
      </motion.section>

      {/* STAY CONNECTED */}

      <motion.section
        animate={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="w-[99%]  p-[1rem]        text-black   my-[2rem]  mx-auto  "
      >
        {/* <h2 className="min-w-fit  my-[1rem] text-left  sm:text-center mx-auto  text-[1.5rem]  font-serif">
          Legal Company
        </h2> */}

        <article className=" w-full  sm:w-[99%]    mx-auto  flex flex-col sm:flex-row justify-around  items-center  gap-3    ">
          <div className="w-full   hidden  sm:block    border-none   ">
            <img src={connect} alt="tradepc" className="w-full    h-full" />
          </div>
          <div className=" w-full   flex flex-col  justify-center  items-center gap-3 ">
            <h2 className="text-[1.5rem] p-[0.7rem] font-serif     text-black">
              Stay Connected 24/7{" "}
            </h2>

            <div className="w-full  sm:hidden    border-none   ">
              <img src={connect} alt="tradepc" className="w-full  h-full" />
            </div>
            <p className=" w-full  p-[0.7rem] border-l-2  border-l-gray-400   border-t-2  border-t-gray-400   font-light  text-[1.1rem]  text-gray-600      tracking-wide  ">
              Our customer service reps are ready 24/7 to help guide you through
              our multiple platforms and answer all your questions!
            </p>
          </div>

          {/* <div className="w-full   hidden  sm:block    border-none   ">
            <img src={connect} alt="tradepc" className="w-full    h-full" />
          </div> */}
        </article>
      </motion.section>

      {/* CRYPTO SECURITY */}

      {/* INVESTMENT PLANS */}
      <section className=" w-full  text-black  bg-white">
        <section className="w-full flex flex-col text-center  gap-5 lg:flex-row justify-center  items-center  p-4  ">
          <motion.h5
            animate={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-[1.5rem]  text-center  mx-auto  font-serif  tracking-wider p-[0.3rem] "
          >
            Initiate your earning process by selecting your most prefered plan
          </motion.h5>
          <img src={choosepl} alt="experts" className="" />
        </section>
        <motion.section
          animate={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="w-[98%] mx-auto my-3        grid  gap-4   grid-cols-2 "
        >
          {investmentPlans.map((data) => (
            <div
              key={data.id}
              className=" w-full  md:w-[90%]  md:mx-auto min-h-full  bg-gray-100     flex flex-col    gap-3 p-1  justify-around  items-center "
            >
              <h3 className="text-[1.1rem] tracking-wide  font-bold  text-black">
                {data.name}
              </h3>
              <motion.ul
                animate={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className=" min-w-full  h-full flex  gap-2 flex-col justify-around  p-[0.5rem]  border-2  border-gray-400 items-center"
              >
                <li className="li-plan-style">
                  <span className="plan-field-style">Captital back:</span>
                  <span className="plan-value-style">{data.CB}</span>
                </li>
                <li className="li-plan-style">
                  <span className="plan-field-style">Min Amount:</span>
                  <span className="plan-value-style">{data.minAmount}</span>
                </li>
                <li className="li-plan-style">
                  <span className="plan-field-style">Max Amount:</span>
                  <span className="plan-value-style">{data.maxAmount}</span>
                </li>
                <li className="li-plan-style">
                  <span className="plan-field-style">ROI:</span>
                  <span className="plan-value-style">{data.ROI}</span>
                </li>
                <li className="li-plan-style">
                  <span className="plan-field-style">Referal Commission:</span>
                  <span className="plan-value-style">{data.RC}</span>
                </li>
              </motion.ul>

              <Link
                className="bg-gradient-to-r  px-[1rem]  py-[0.3rem]    text-center text-[1.1rem] tracking-wide  font-serif  bg-red-800  my-2   text-white shadow-inner shadow-gray-500"
                to="/register"
              >
                Choose Plan
              </Link>
            </div>
          ))}
        </motion.section>
      </section>

      {/* CREATE AN ACCOUNT  */}

      <section className="w-[99%]  p-[1rem] border-r-4     bg-white  text-black   my-[2rem]  mx-auto  ">
        {/* <h2 className="min-w-fit  my-[1rem] text-left  sm:text-center mx-auto  text-[1.5rem]  font-serif">
          Legal Company
        </h2> */}

        <article className=" w-full  sm:w-[99%]     mx-auto  flex flex-col sm:flex-row justify-around  items-center  gap-3    ">
          {/* <div className="w-full h-full  ">
            <img src={belief} alt="belief" className="w-full  h-full" />
          </div> */}
          <div className=" w-full   flex flex-col  justify-center  items-center gap-3 ">
            <h2 className="text-[1.5rem] p-[0.7rem] font-serif   text-black">
              Open a {domain} markets Account Now{" "}
            </h2>

            <div className="w-full  sm:hidden    border-none rounded-full bg-gradient-to-b  from-transparent  from-70%  to-gray-300  ">
              <img src={startnow} alt="tradepc" className="w-full  h-full" />
            </div>
            <p className=" w-full  p-[0.7rem]   font-light  text-[1.1rem]  text-gray-600      tracking-wide  ">
              Open your Cryptonite markets individual brokerage account and IRAs
              now! {domain} markets Financial LLC is member of FINRA, SIPC,
              NASDAQ and NYSE
            </p>
          </div>

          <div className="w-full   hidden  sm:block    border-none rounded-full bg-gradient-to-b  from-transparent  from-70%  to-gray-300   ">
            <img src={startnow} alt="tradepc" className="w-full    h-full" />
          </div>
        </article>
      </section>
    </main>
  );

  return content;
}
