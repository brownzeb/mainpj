import singer from "../assets/singernobg.png";
import coins from "../assets/coinsinphone.png";
import crypto from "../assets/cryptos-removebg-preview.png";
import investnow from "../assets/newbgimg.jpg";
import balance from "../assets/walletballance-removebg-preview.png";
import success from "../assets/success.jpg";
import { domain, investmentPlans, numberData, userTestimonial } from "../data";
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
import { IoStar } from "react-icons/io5";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import { SiYoutubemusic } from "react-icons/si";
import { IoSearchSharp } from "react-icons/io5";
// import { TickerTape } from "react-tradingview-embed";

export default function LandingPage() {
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [allSongs, setAllsongs] = useState();
  const [width, setWidth] = useState(window.innerWidth);
  const [searchData, setSearchData] = useState("");



  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/tsxe0jxicyh6jqofkheftwzluxeyiloo.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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

  // useEffect(() => {
  //   const handleWidthResize = () => setWidth(window.innerWidth);
  //   window.addEventListener("resize", handleWidthResize);

  //   const fetchData = async () => {
  //     let searchDataArray = [];
  //     try {
  //       setLoading(true);
  //       const serverRes = await axios.get("/getallsongs", {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });

  //       console.log(serverRes);
  //       if (serverRes.status > 200) {
  //         setErr(
  //           serverRes?.data?.message
  //             ? serverRes?.data?.message
  //             : serverRes?.data
  //         );
  //       }

  //       if (
  //         searchData &&
  //         searchData.length > 0 &&
  //         typeof serverRes?.data?.allSongFile !== "undefined" &&
  //         serverRes?.data?.allSongFile.length != 0
  //       ) {
  //         serverRes?.data?.allSongFile.map((data) => {
  //           if (data?.filename.includes(searchData)) {
  //             searchDataArray.push(data);
  //           }
  //         });
  //       }

  //       setAllsongs(
  //         searchDataArray.length > 0
  //           ? searchDataArray
  //           : serverRes?.data?.allSongFile
  //       );
  //     } catch (error) {
  //       const err = errorMsg(error);

  //       setErr(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  //   return () => window.removeEventListener("resize", handleWidthResize);
  // }, [searchData, setAllsongs]);

  // console.log(allSongs);
  // console.log(width);
  // console.log(searchData);

  const content = (
    <main className="min-h-screen w-full  flex flex-col gap-4  z-0">
      <section
        className={` w-full h-[30rem] bg-black text-white flex   justify-center items-center    bg-cover    bg-center bg-no-repeat  `}
        style={{ backgroundImage: `url(${investnow})` }}
      >
        <div className=" w-[97%]  h-[78%]    flex flex-col  md:flex-row justify-start  items-start   ">
          <h2 className=" w-[90%]  px-3   text-white   place-content-center  tracking-wide font-bold text-[1.3rem]   text-center md:text-left  ">
            Maximise your investment growth today with {" "}
            <span className="text-yellow-500">{domain}</span>.
          </h2>

          {/* <hr className="w-[30%] mx-auto md:hidden  bg-white my-3" />

          <p className=" w-[90%]  text-center  place-content-center    px-[1rem]  rounded-lg  tracking-wide   bg-black bg-opacity-90 text-white ">
            {domain} is a reputable trading and crypto investment platform that
            provides individuals and institutions with a reliable and secure
            means of buying and selling cryptocurrencies.
          </p> */}
        </div>
      </section>

      {/* trading widget */}

      {/* WHO WE ARE & HOW IT WORKS */}
      <section className="w-full min-h-auto md:flex md:justify-around items-center">
        {/* WHO WE ARE */}
        <section className=" w-full min-h-[20rem]    text-black  flex flex-col justify-around  items-center text-center p-2 ">
          <h2 className="w-fit mx-auto font-black tracking-wide">
            <b>Who we are</b>
          </h2>
          <p className="p-3  bg-white text-black tracking-wide  shadow-md shadow-gray-400">
            At {domain}, we specialize in trading digital assets and providing
            expert guidance to help maximize investments. Our team of
            professionals is dedicated to staying updated with the latest market
            trends and utilizing strategic techniques to ensure the growth of
            our clients' portfolios. With a focus on transparency and
            efficiency, we aim to empower individuals looking to navigate the
            world of digital assets and make informed investment decisions.
            Whether you are new to the crypto space or a seasoned investor,
            Cryptobull is here to assist you in achieving your financial goals
            with confidence and expertise.
            <Link
              to="/about"
              className="text-blue-500 ml-1   font-bold tracking-wide "
            >
              Read More &#10138;
            </Link>
          </p>
        </section>
        {/* HOW IT WORKS */}
        <section className=" w-full min-h-[10rem]   text-black  flex flex-col justify-center  items-center ">
          <h1 className=" tracking-wide w-fit mx-auto  my-[2rem]  text-[1.2rem]  font-bold ">
            How it works
          </h1>
          <ul className=" w-[80%] mx-auto text-left grid grid-cols-1 gap-3 list-decimal">
            <li>
              <Link className="text-blue-500  hover:underline hover:underline-offset-2 hover:transition-all delay-3000">
                Create account &#10138;
              </Link>
            </li>
            <li>Login into your account.</li>
            <li>Fund your acount and choose a plan.</li>
            <li>{domain} team of trading experts will trade your assets.</li>
            <li>Watch your profit grows.</li>
            <li>Withdraw your funds to your prefered wallet.</li>
          </ul>
        </section>
      </section>

      {/* CRYPTO SECURITY */}

      <section
        className="w-full min-h-[10rem]  my-4  flex flex-col  gap-3 justify-around items-center"

        // style={{backgroundImage: `url(${coins})`}}
      >
        <h3 className=" w-fit mx-auto tracking-wide  text-[1.2rem]  font-bold">
          Crypto Security
        </h3>

        <article className="w-[98%]  mx-auto  flex flex-col  gap-3   justify-around  items-center">
          <img src={coins} alt="security" className="w-full  mx-auto" />

          {/* <img
            src="https://d33vw3iu5hs0zi.cloudfront.net/media/exness_phone_home_page_9e8292cbcc.jpg"
            alt="phone.jpg"
            className="w-full"
          /> */}

          <div className="w-[80%]  mx-auto  flex justify-around  items-center">
            <SiHackaday className="text-[2rem]  text-red-500" />
            <FaArrowRightLong className="animate-pulse text-[0.8rem]" />

            <GiShieldReflect className="text-[2rem]  text-green-500 " />
            <FaArrowRightLong className="animate-pulse text-[0.8rem]" />

            <MdSecurity className="text-[2rem] text-green-500" />
            <FaArrowRightLong className="animate-pulse text-[0.8em]" />
            <BsCurrencyExchange className="text-[2rem]  text-[#3d79b2]" />
          </div>

          <p className=" w-[97%] mx-auto  text-center p-3 ">
            Ensuring secure crypto from hackers in Cryptobull is of utmost
            importance to protect your digital assets. As a professional
            platform, Cryptobull employs cutting-edge encryption technology and
            robust security measures to safeguard your investments against
            potential cyber threats. By continuously monitoring and enhancing
            their security protocols, Cryptobull aims to provide users with a
            safe and reliable environment for conducting cryptocurrency
            transactions. Rest assured that your assets are in good hands on
            Cryptobull, where security is a top priority.
          </p>
        </article>
      </section>

      {/* INVESTMENT PLANS */}
      <section className="w-full flex flex-col text-center  gap-5 lg:flex-row justify-center  items-center  p-4  ">
        <h5 className="text-[1.3rem]  text-center  mx-auto  font-bold text-[#111335]   tracking-wider p-[1rem] ">
          Choose your most prefered plan and initate your earning process today.
        </h5>
        <img src={experts} alt="experts" className="" />
      </section>
      <section className="w-[98%] mx-auto my-3  grid  gap-2   grid-cols-2 md:grid-cols-4">
        {investmentPlans.map((data) => (
          <div
            key={data.id}
            className=" w-full min-h-full    flex flex-col    gap-3 p-1  justify-around  items-center  shadow-xl shadow-gray-600"
          >
            <h3 className="text-[1.1rem] tracking-wide  font-bold  text-black">
              {data.name}
            </h3>
            <ul className=" min-w-full  h-full flex  gap-2 flex-col justify-around  items-center">
              <li className="li-plan-style">
                <span>Captital back:</span>
                <span>{data.CB}</span>
              </li>
              <li className="li-plan-style">
                <span>Min Amount:</span>
                <span>{data.minAmount}</span>
              </li>
              <li className="li-plan-style">
                <span>Max Amount:</span>
                <span>{data.maxAmount}</span>
              </li>
              <li className="li-plan-style">
                <span>ROI:</span>
                <span>{data.ROI}</span>
              </li>
              <li className="li-plan-style">
                <span>Referal Commission:</span>
                <span>{data.RC}</span>
              </li>
            </ul>

            <Link
              className="bg-[#99c2e9] p-3 text-center text-[1.1rem] tracking-wide  my-2  rounded-md text-black shadow-xl shadow-gray-600"
              to="/register"
            >
              Choose Plan &#10138;
            </Link>
          </div>
        ))}
      </section>
      {/* NUMBERS THAT MADE US */}
      <section className="min-h-[10rem] w-full    bg-gray-900  text-white  flex flex-col justify-around  items-center  p-2">
        <h2 className=" min-w-fit     break-words  uppercase md:text-xl  text-lg my-3  mx-auto font-bold tracking-wider ">
          The numbers that make up {domain}
        </h2>
        <img
          src={success}
          alt="coin"
          height={400}
          width={400}
          className=" w-full  mx-auto"
        />
        <hr className="w-[5rem]  mx-auto bg-white  my-3" />
        <p className="w-[85%] mx-auto p-2 text-center">
          {" "}
          From trading volume to the number of active clients, we are happy to
          share out the figure that makes us one of the world's leading crypto
          investment company.
        </p>
        <article className="grid grid-cols-2 lg:grid-cols-4  gap-3">
          {numberData.map((data) => (
            <div
              key={data.id}
              className="flex flex-col justify-around gap-2 items-center text-center p-1"
            >
              <h4>
                <b>{data.name}</b>
              </h4>
              <p>{data.msg}</p>
            </div>
          ))}
        </article>
      </section>

      {/* TESTIMONIALS */}
      <section className="w-full ">
        <h2 className="w-fit mx-auto text-[1.5rem] tracking-wide">
          what our clients are saying.
        </h2>

        <div className="  w-[90%] min-h-[10rem] mx-auto  py-2  my-4 flex justify-around  gap-4  items-center  overflow-scroll">
          {userTestimonial.map((data) => (
            <figure
              key={data.id}
              className=" min-w-[70%]  min-h-full  border-2 border-yellow-500   py-2  flex  gap-4  flex-col justify-around  items-center   shadow-lg shadow-gray-500"
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
    </main>
  );

  return content;
}
