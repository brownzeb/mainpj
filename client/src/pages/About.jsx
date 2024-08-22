import { domain } from "../data";
import { team, services } from "../data";
import trade from "../assets/iphone-trade-removebg-preview.png";
import about from "../assets/about.jpg";

export default function About() {
  const content = (
    <main className="min-h-screen w-full bg-white ">
      {/* image styling section */}
      <section
        id="about-head"
        className="w-full h-[20rem] pl-4  bg-gray-200 relative pt-2"
      >
        <h2 className=" font-bold text-[1.3rem]  tracking-wide   capitalize  ">
          About {domain}
        </h2>
        <div className=" h-1 w-[12rem] right-7 bg-blue-500  "></div>

        <div className=" w-1 h-[12rem] bg-blue-500  "></div>

        <article className="w-[80%] h-[80%]   bg-transparent  right-0 bottom-0  flex flex-col  justify-around  items-center  absolute">
          <img src={about} alt="abt" className=" min-w-full   min-h-full" />
        </article>
      </section>

      {/* WHO WE ARE */}

      <section className=" w-full min-h-[20rem]    text-black  flex flex-col justify-around  items-center text-center p-2 ">
        <h2 className="w-fit mx-auto font-black tracking-wide">
          <b>Who we are</b>
        </h2>
        <p className="p-3  bg-white text-black tracking-wide  shadow-md shadow-gray-400">
          At {domain}, we specialize in trading digital assets and providing
          expert guidance to help maximize investments. Our team of
          professionals is dedicated to staying updated with the latest market
          trends and utilizing strategic techniques to ensure the growth of our
          clients' portfolios. With a focus on transparency and efficiency, we
          aim to empower individuals looking to navigate the world of digital
          assets and make informed investment decisions. Whether you are new to
          the crypto space or a seasoned investor, Cryptobull is here to assist
          you in achieving your financial goals with confidence and expertise.
        </p>
      </section>

      {/* OUR GOAL */}
      <section className="w-full text-center  ">
        <h2 className="  mx-auto  text-center font-black tracking-wider my-5">
          Our Goal
        </h2>
        <p className="text-center p-3 ">
          In the world of trading, especially in platforms like Cryptobull, the
          primary objective for investors is always to maximize their profit
          potential. By strategically analyzing market trends, utilizing risk
          management techniques, and staying informed about current market
          conditions, investors aim to make well-informed trades that can result
          in optimal financial gains. Successful trading on Cryptobull often
          involves a combination of technical analysis, fundamental analysis,
          and a deep understanding of various cryptocurrencies. Through diligent
          research, timely decision-making, and disciplined trading strategies,
          investors strive to achieve their profit objectives and navigate the
          volatile landscape of the digital assets market with professionalism
          and expertise.
        </p>
      </section>
      <section id="service" className="w-full my-6  scroll-smooth  ">
        <h2 className=" min-w-fit  text-center  mx-auto  font-black tracking-wider my-5">
          Our Services
        </h2>

        <img
          src={trade}
          alt="trade"
          className="    border-2   border-gray-400   rounded-full mx-auto "
        />
        {services.map((data) => (
          <div
            key={data.id}
            className="w-[80%] mx-auto  flex flex-col justify-center  items-center  "
          >
            <div className=" w-1 h-[3rem] mx-auto bg-black  "></div>
            <div className=" border-2 border-gray-500  bg-white  text-black  p-2  rounded-r-xl">
              <h5 className="mx-auto text-yellow-700 font-bold text-[1.2rem] underline underline-offset-2 tracking-wide">
                {data.head}
              </h5>
              <p>{data.msg}</p>
            </div>
          </div>
        ))}
      </section>
      {/* OUR TEAM */}
      <section className="w-full  flex  flex-col  justify-around  items-center">
        <h2 className="font-black tracking-wider my-5">Our Team</h2>
        <article className="w-[98%]  mx-auto flex flex-col justify-around gap-6 items-center ">
          {team.map((data) => (
            <div
              key={data.id}
              className="w-[99%]  mx-auto flex  justify-around  gap-3 items-center"
            >
              <figure className="w-[85%] flex flex-col justify-around gap-2  items-center">
                <img
                  src={data.imgUrl}
                  alt="myphoto"
                  className="rounded-full  w-[60%]   h-[60%]"
                />
                <figcaption className="capitalize  mx-auto font-bold tracking-wide">
                  {data.name}
                </figcaption>
                <figcaption className="text-gray-900  mx-auto">
                  {data.role}
                </figcaption>
              </figure>
              <div className=" w-1 h-[9rem] bg-black  "></div>
              <div className="text-center ">
                <h4 className="mx-auto font-serif unserline underline-offset-2 ">
                  {data.name} as a {data.role}
                </h4>
                <p className=" w-[98%]  mx-auto text-gray-500  text-[0.9rem] tracking-wide">
                  {data.msg}
                </p>
              </div>
            </div>
          ))}
        </article>
      </section>
      {/* COLLABORATING COMPANIES */}
      <section className="w-full px-2">
        <h2 className="  min-w-fit mx-auto  text-center font-black tracking-wider my-5">
          Our Collaborators
        </h2>
        <div className="w-[98%]  mx-auto flex justify-around  my-4 text-gray-600 items-center  gap-3  text-[2rem]   font-bold overflow-scroll">
          <div>exness.com</div>
          <div>coinmarketcap.com</div>
          <div>binance.com</div>
          <div>tradingview.com</div>
          <div>coingecko.com</div>
          <div>weisrratings.com</div>
        </div>
      </section>
    </main>
  );

  return content;
}
