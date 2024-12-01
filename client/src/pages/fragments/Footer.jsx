import { footerData } from "../../data";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { domain } from "../../data";

export default function Footer() {
  const content = (
    <footer className=" w-full  min-h-[12rem]    bg-black  text-center  text-white pt-2">
      <section className="h-full w-[98%]  mx-auto  flex flex-col justify-around  gap-3  items-center ">
        <div className=" text-[0.8rem]  sm:text-[1rem] underline  underline-offset-2   font-bold flex justify-center  items-center gap-3 sm:gap-5 tracking-wide">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link> <Link to="/login">Sign in</Link>
          <Link to="/register">Sign up</Link>
        </div>
        <p className="text-[0.9rem] text-left  px-[0.4rem]  text-gray-400  tracking-wide  font-thin">
          Securities trading is offered to self-directed customers by {domain}{" "}
          Financial LLC, a broker dealer registered with the Securities and
          Exchange Commission (SEC).{domain} Financial LLC is a member of the
          Financial Industry Regulatory Authority (FINRA), Securities Investor
          Protection Corporation (SIPC), The New York Stock Exchange (NYSE),
          NASDAQ and Cboe EDGX Exchange, Inc (CBOE EDGX).
          {domain} Financial LLC is a member of SIPC, which protects securities
          customers of its members up to $500,000 (including $250,000 for claims
          for cash). An explanatory brochure is available upon request or at
          www.sipc.org. Our clearing firm, Apex Clearing Corp., has purchased an
          additional insurance policy.. Our clearing firm Apex Clearing Corp has
          purchased an additional insurance policy. The coverage limits provide
          protection for securities and cash up to an aggregate of $150 million,
          subject to maximum limits of $37.5 million for any one customer’s
          securities and $900,000 for any one customer’s cash. Similar to SIPC
          protection, this additional insurance does not protect against a loss
          in the market value of securities. Cryptocurrency execution and
          custody services are provided by Apex Crypto LLC (NMLS ID 1828849)
          through a software licensing agreement between Apex Crypto LLC and{" "}
          {domain} Pay LLC. Cryptocurrency trading is offered through an account
          with Apex Crypto. Apex Crypto is not a registered broker-dealer or
          FINRA member and your cryptocurrency holdings are not FDIC or SIPC
          insured. Please ensure that you fully understand the risks involved
          before trading. Not all coins provided by Apex Crypto LLC are
          available to New York residents. No content on the {domain} Financial
          LLC website shall be considered as a recommendation or solicitation
          for the purchase or sale of securities, options, or other investment
          products. All information and data on the website is for reference
          only and no historical data shall be considered as the basis for
          judging future trends. Investors should be aware that system response,
          execution price, speed, liquidity, market data, and account access
          times are affected by many factors, including market volatility, size
          and type of order, market conditions, system performance, and other
          factors. Free trading of stocks, ETFs, and options refers to $0
          commissions for
          {domain} Financial LLC self-directed individual cash or margin
          brokerage accounts and IRAs that trade U.S. listed securities via
          mobile devices, desktop or website products. Relevant regulatory and
          exchange fees may apply. Please refer to our Fee Schedule for more
          details
        </p>
        <p className="w-[80%] mx-auto my-[1rem] text-[0.8rem] text-center">
          &copy; 2024 {domain}
        </p>
      </section>
    </footer>
  );

  return content;
}
