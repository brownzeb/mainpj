import { Link, useNavigate } from "react-router-dom";
import { GiSoundOn } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { headerData, domain } from "../../data";
import { FaLessThanEqual } from "react-icons/fa6";

// import { domain } from "../../data";

// const itemVariants: Variants = {
//   open: {
//     opacity: 1,
//     y: 0,
//     transition: { type: "spring", stiffness: 300, damping: 24 },
//   },
//   closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
// };

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();

  const changePage = (pg) => {
    if (pg.length === 0) {
      setShowNav(false);

      navigate("/");
    } else {
      setShowNav(!showNav);
      navigate(`/${pg}`);
    }
  };

  const content = (
    <header className=" bg-[#1c2121]  text-white  border-b-2  border-b-gray-500 z-50   abolute top-0 sticky">
      <section className="w-full  h-[4rem]  flex justify-around  items-center">
        <button
          onClick={() => {
            changePage("");
          }}
          className="flex justify-center  items-center   border-y-2 rounded-md  shadow-inside shadow-gray-500  p-1"
        >
          <span className="text-green-500">
            Bull <sup>&#10138;</sup>
          </span>
          <span className="text-red-500">
            Bear <sup>&#10136;</sup>
          </span>
          <span className="text-blue-500">Experts</span>
          {/* <GiSoundOn className="text-[1.8rem]" /> */}
        </button>
        <Link to="/login" className="header-link">
          Sign in
        </Link>
        <Link to="/register" className="header-link">
          Sign up
        </Link>

        {headerData.map((data) => (
          <Link
            to={data.url}
            key={data.id}
            className=" header-link   hidden md:block"
          >
            {data.name}
          </Link>
        ))}
        <button onClick={() => setShowNav(!showNav)} className="md:hidden">
          {showNav ? <LiaTimesSolid /> : <RxHamburgerMenu />}
        </button>
      </section>
      <AnimatePresence>
        <motion.section
          initial={{ x: -90 }}
          whileInView={{ x: 0, y: 0 }}
          transition={{
            delay: 0,
            duration: 0.5,
            delayChildren: 0.5,
            staggerChildren: 0.5,
          }}
          className={`w-[70%]  h-screen  bg-white  z-50  flex justify-center   items-start sm:hidden  ${
            !showNav ? "hidden" : "block  z-50"
          }`}
        >
          <motion.ul
            initial={{ x: -70 }}
            whileInView={{ x: 0, y: 0 }}
            transition={{
              delay: 0,
              duration: 1,
              delayChildren: 0.5,
              staggerChildren: 0.5,
            }}
            className=" w-full   text-black  text-[1.2rem] font-bold  mt-[1rem]  flex  flex-col justify-around  gap-4  items-center"
          >
            <motion.li
              initial={{ x: -90 }}
              whileInView={{ x: 0, y: 0 }}
              transition={{ delay: 0, duration: 0.8 }}
              className="header-mobile-li-style  "
              onClick={() => changePage("about#about-head")}
            >
              {/* <Link to="/about" className=" header-mobile-link-style "> */}{" "}
              About Us {/* </Link> */}
            </motion.li>
            <motion.li
              initial={{ x: -80 }}
              whileInView={{ x: 0, y: 0 }}
              transition={{ delay: 0, duration: 0.8 }}
              className="header-mobile-li-style  "
              onClick={() => changePage("about#service")}
            >
              {/* <Link
                to="/about#about-service"
                className=" header-mobile-link-style "
              > */}
              Services {/* </Link> */}
            </motion.li>
            <motion.li
              initial={{ x: -60 }}
              whileInView={{ x: 0, y: 0 }}
              transition={{ delay: 0, duration: 0.8 }}
              className="header-mobile-li-style  "
              onClick={() => changePage("milestone")}
            >
              {/* <Link to="/about" className=" header-mobile-link-style "> */}
              Milestone {/* </Link> */}
            </motion.li>
            <motion.li
              initial={{ x: -40 }}
              whileInView={{ x: 0, y: 0 }}
              transition={{ delay: 0, duration: 0.8 }}
              className="header-mobile-li-style  "
              onClick={() => changePage("update")}
            >
              {/* <Link to="/about" className=" header-mobile-link-style "> */}
              Updates {/* </Link> */}
            </motion.li>
            <motion.li
              initial={{ x: -20 }}
              whileInView={{ x: 0, y: 0 }}
              transition={{ delay: 0, duration: 0.8 }}
              className="header-mobile-li-style  "
              onClick={() => changePage("contact")}
            >
              {/* <Link to="/about" className=" header-mobile-link-style "> */}
              Contact Us {/* </Link> */}
            </motion.li>
          </motion.ul>
        </motion.section>
      </AnimatePresence>
    </header>
  );

  return content;
}
