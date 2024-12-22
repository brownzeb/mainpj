import { team, services, whyChooseUs, domain } from "../data";
import trade from "../assets/iphone-trade-removebg-preview.png";
import about from "../assets/about.jpg";
import belief from "../assets/illustrate.jpg";
import tradepc from "../assets/tradepc.jpg";
import rise from "../assets/risecomp.jpg";
import choose from "../assets/whychooseus.jpg";
import mine from "../assets/mine.png";

export default function About() {
  const content = (
    <main className="min-h-screen w-full my-[1rem]    text-black ">
      {/* WHO WE ARE  */}
      <section className="w-[90%]  mx-auto  ">
        <h2 className="min-w-fit  text-left  sm:text-center mx-auto  text-[2rem]  font-serif">
          Who We Are
        </h2>

        <article className=" w-full    bg-center bg-cover bg-no-repeat  flex flex-col sm:flex-row justify-center  items-center  gap-3    ">
          <div className="w-full h-full  ">
            <img src={rise} alt="belief" className="w-full  h-full" />
          </div>
          <div className="w-full h-full   flex flex-col    justify-center  items-center gap-3    text-left  p-[1rem]  bg-gradient-to-b  from-transparent  from-80% to-white  ">
            <p className="my-[1rem]">
              We are a financial company with the customer at heart, the
              internet as our foundation, and technology as our lifeblood. Our
              leadership has extensive experience in both the internet and
              financial industries. We are committed to synergizing technology
              with finance by providing reliable, professional, intelligent and
              efficient products and services. Enjoy Tech. Enjoy Investing.
            </p>
          </div>
        </article>
      </section>

      {/* WHY CHOOSE US */}

      <section className="w-[90%]  mx-auto ">
        <h1 className="  min-w-fit  text-[1.5rem] sm:text-center  font-serif  tracking-wide my-[1rem] mx-auto text-black ">
          Why Choose Us
        </h1>

        <ul className=" w-[98%] mx-auto   grid grid-cols-1  sm:grid-cols-2  lg:grid-cols-4 my-[1rem] place-content-center  gap-3    ">
          {whyChooseUs.map((data) => (
            <li
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
            </li>
          ))}
        </ul>
      </section>

      {/* INTEGRATED SYSTEMS */}

      <section className="w-[99%]  p-[1rem]    text-black   my-[2rem]  mx-auto  ">
        {/* <h2 className="min-w-fit  my-[1rem] text-left  sm:text-center mx-auto  text-[1.5rem]  font-serif">
          Legal Company
        </h2> */}

        <article className=" w-full  sm:w-[99%]     mx-auto  flex flex-col sm:flex-row justify-around  items-center  gap-3    ">
          {/* <div className="w-full h-full  ">
            <img src={belief} alt="belief" className="w-full  h-full" />
          </div> */}
          <div className=" w-full   flex flex-col  justify-center  items-center gap-3 ">
            <h2 className="text-[1.5rem] p-[0.7rem] font-serif   bg-clip-text  text-transparent  bg-gradient-to-r  from-red-800 to-green-800">
              A Fully Integrated system for large Crypto Mining and Trading
              system{" "}
            </h2>

            <div className="w-full  sm:hidden    border-none rounded-full bg-gradient-to-b  from-transparent  from-70%  to-gray-300  ">
              <img src={mine} alt="tradepc" className="w-full  h-full" />
            </div>
            <p className=" w-full  p-[0.7rem] border-l-2  border-l-green-500   border-t-2  border-t-green-500   font-light  text-[1.1rem]  text-gray-600      tracking-wide  ">
              We provide you with the most advanced trading platform and
              extremely fast trading execution. We offer popular products for
              different types of traders on the world's major stock exchanges.
              Individuals are an important part of the market and should not be
              ignored. They should be empowered with better information, tools,
              services, opportunities, and lower costs. Respecting the investor
              is respecting the market. Technology is the investor’s best
              friend. It vastly expands the human’s trading capabilities in
              terms of time, scale, and technique. Technology is the future.
              What
            </p>
          </div>

          <div className="w-full   hidden  sm:block    border-none rounded-full bg-gradient-to-b  from-transparent  from-70%  to-gray-300   ">
            <img src={mine} alt="tradepc" className="w-full    h-full" />
          </div>
        </article>
      </section>

      {/* WHO WE ARE  */}
      <section className="w-[90%]  mx-auto  ">
        <h2 className="min-w-fit  text-left  sm:text-center mx-auto  text-[2rem]  font-serif">
          What We Offer
        </h2>

        <article className=" w-full    bg-center bg-cover bg-no-repeat  flex flex-col sm:flex-row justify-center  items-center  gap-3    ">
          <div className="w-full h-full  ">
            <img src={belief} alt="belief" className="w-full  h-full" />
          </div>
          <div className="w-full h-full   flex flex-col    justify-center  items-center gap-3    text-left  p-[1rem]  bg-gradient-to-b  from-transparent  from-80% to-white  ">
            <p className="my-[1rem]">
              As a financial company driven by technology, we aim to offer: An
              all-in-one self-directed investment platform that provides
              excellent user experience. Advanced and intelligent tools and
              services Key Features:
            </p>
            <ul className="list-disc  font-extralight">
              <li>Multi-platform Accessibility</li>
              <li> Full Extended Hours Trading</li>
              <li>10% Commission</li>
              <li>Free Real-Time Quotes</li>
              <li>24/7 Online Help</li>
            </ul>
          </div>
        </article>
      </section>

      {/* INTEGRATED SYSTEMS */}

      <section className="w-[99%]  p-[1rem]    text-black   my-[2rem]  mx-auto  ">
        {/* <h2 className="min-w-fit  my-[1rem] text-left  sm:text-center mx-auto  text-[1.5rem]  font-serif">
          Legal Company
        </h2> */}

        <article className=" w-full  sm:w-[99%]     mx-auto  flex flex-col sm:flex-row justify-around  items-center  gap-3    ">
          {/* <div className="w-full h-full  ">
            <img src={belief} alt="belief" className="w-full  h-full" />
          </div> */}
          <div className=" w-full   flex flex-col  justify-center  items-center gap-3 ">
            <h2 className="text-[1.5rem] p-[0.7rem] font-serif   bg-clip-text  text-transparent  bg-gradient-to-r  from-red-800 to-green-800"></h2>

            <div className="w-full  sm:hidden    border-none rounded-full bg-gradient-to-b  from-transparent  from-70%  to-gray-300  ">
              <img src={choose} alt="tradepc" className="w-full  h-full" />
            </div>
            <p className=" w-full  p-[0.7rem]   font-light  text-[1.1rem]  text-gray-600      tracking-wide  ">
              Brokerage services are provided by {domain} Financial LLC, a
              broker dealer registered with the Securities and Exchange
              Commission (SEC). {domain} Financial LLC is a member of the
              Financial Industry Regulatory Authority (FINRA), Securities
              Investor Protection Corporation (SIPC), the New York Stock
              Exchange (NYSE), NASDAQ and Cboe EDGX Exchange, Inc (CBOE EDGX).
              {domain} Financial LLC is a member of SIPC, which protects
              securities customers of its members up to $500,000 (including
              $250,000 for claims for cash). An explanatory brochure is
              available upon request or at www.sipc.org. Our clearing firm, Apex
              Clearing Corp., has purchased an additional insurance policy. The
              coverage limits provide protection for securities and cash up to
              an aggregate of $150 million, subject to maximum limits of $37.5
              million for any one customer’s securities and $900,000 for any one
              customer’s cash. Similar to SIPC protection, this additional
              insurance does not protect against a loss in the market value of
              securities. {domain} Financial stays up-to-date with the latest
              data security in order to protect our investors’ personal
              information and asset data.
            </p>
          </div>

          <div className="w-full   hidden  sm:block    border-none rounded-full bg-gradient-to-b  from-transparent  from-70%  to-gray-300   ">
            <img src={choose} alt="tradepc" className="w-full    h-full" />
          </div>
        </article>
      </section>
    </main>
  );

  return content;
}
