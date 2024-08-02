import singer from "../assets/singernobg.png";
import coins from "../assets/coinsinphone.png";
import crypto from "../assets/cryptos-removebg-preview.png";
import balance from "../assets/walletballance-removebg-preview.png";
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

export default function LandingPage() {
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [allSongs, setAllsongs] = useState();
  const [width, setWidth] = useState(window.innerWidth);
  const [searchData, setSearchData] = useState("");

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
        className={` w-full h-[30rem] bg-black text-white flex   justify-center items-center    bg-cover  bg-center bg-no-repeat  `}
        style={{ backgroundImage: `url(${crypto})` }}
      >
        <div className=" w-[90%]  h-[63%]    flex flex-col  md:flex-row justify-around  items-center  bg-black bg-opacity-80 ">
          <h2 className=" w-[90%]  px-[1rem]   place-content-center  tracking-wide font-bold text-[1.3rem]   text-center  bg-black bg-opacity-85  ">
            Invest for the future and make your life events the happiest with{" "}
            {domain}, the best cryptocurrency investment brocker platform{" "}
            {/* <span className="underline underline-offset-2 font-black tracking-wider">
              {" "}
              {domain}
            </span> */}
          </h2>

          <hr className="w-[30%] mx-auto md:hidden  bg-white my-3" />

          <p className=" w-[90%]  text-center  place-content-center    px-[1rem]  rounded-lg  tracking-wide   bg-black bg-opacity-90 text-white ">
            {domain} is a reputable trading and crypto investment platform that
            provides individuals and institutions with a reliable and secure
            means of buying and selling cryptocurrencies.
          </p>
        </div>
      </section>

      {/* WHO WE ARE & HOW IT WORKS */}
      <section className="w-full min-h-auto md:flex md:justify-around items-center">
        {/* WHO WE ARE */}
        <section className=" w-full min-h-[20rem]    text-black  flex flex-col justify-around  items-center text-center p-2 ">
          <h2 className="w-fit mx-auto font-black tracking-wide">
            <b>Who we are</b>
          </h2>
          <p className="px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            reiciendis cumque? Voluptate accusantium architecto voluptatibus,
            assumenda fugiat nostrum necessitatibus deserunt excepturi ab
            repellendus alias obcaecati tempora veniam debitis, temporibus
            perspiciatis quo asperiores. Repellat esse quibusdam quasi, nulla
            facilis facere quae. Reprehenderit, fuga earum. Earum, consequatur
            sit obcaecati aut possimus molestiae.
          </p>
        </section>
        {/* HOW IT WORKS */}
        <section className=" w-full min-h-[10rem]   text-black  flex flex-col justify-center  items-center ">
          <h1 className=" tracking-wide w-fit mx-auto  text-[1.2rem]  font-bold ">
            How it works
          </h1>
          <ul className=" w-[80%] mx-auto text-left  list-decimal">
            <li>
              <Link className="text-blue-500  hover:underline hover:underline-offset-2 hover:transition-all delay-3000">
                Create account &#10138;
              </Link>
            </li>
            <li>Login into your account.</li>
            <li>Fund your acount and choose a plan.</li>
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
          <img
            src={security}
            alt="security"
            className="w-[70%]  border-2 border-black mx-auto"
          />

          <div className="w-[80%]  mx-auto  flex justify-around  items-center">
            <SiHackaday className="text-[2rem]  text-red-500" />
            <FaArrowRightLong className="animate-pulse text-[0.8rem]" />

            <GiShieldReflect className="text-[2rem]  text-green-500 " />
            <FaArrowRightLong className="animate-pulse text-[0.8rem]" />

            <MdSecurity className="text-[2rem] text-green-500" />
            <FaArrowRightLong className="animate-pulse text-[0.8em]" />
            <BsCurrencyExchange className="text-[2rem]  text-[#3d79b2]" />
          </div>

          <p className=" w-[90%] mx-auto   ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit praesentium temporibus quo animi quos similique,
            facilis ipsa voluptatem quasi laboriosam commodi dignissimos porro
            dicta corrupti magni ea quaerat ducimus sequi!
          </p>
        </article>
      </section>

      {/* INVESTMENT PLANS */}
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
              to="#"
            >
              Choose Plan &#10138;
            </Link>
          </div>
        ))}
      </section>
      {/* NUMBERS THAT MADE US */}
      <section className="min-h-[10rem] w-full    bg-gray-900  text-white  flex flex-col justify-around  items-center  p-2">
        <h2>The numbers that make up {domain}</h2>
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
              kley={data.id}
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

        <div className="  w-[90%] h-[10rem] mx-auto flex justify-around  items-center  overflow-scroll">
          {userTestimonial.map((data) => (
            <figure
              key={data.id}
              className=" min-w-[70%]  min-h-full  flex flex-col justify-around  items-center   shadow-lg shadow-gray-500"
            >
              <img
                src={data.imgUrl}
                alt="user-image"
                width={50}
                height={50}
                className="rounded-full"
              />

              <p className="w-fit mx-auto  text-center ">
                &#10077;{data.msg} &#10078;
              </p>

              <figcaption>{data.name}</figcaption>
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
