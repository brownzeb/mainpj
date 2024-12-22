import { Link, useNavigate } from "react-router-dom";
import { GiSoundOn } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { headerData, domain } from "../../data";
import { FaLessThanEqual } from "react-icons/fa6";
import bullbear from "../../assets/bullbear.jpg";

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
    <header className=" bg-[white]  text-black  border-b-2  border-b-gray-500 z-50   abolute top-0 sticky">
      <section className="w-[90%]  mx-auto  h-[4rem]  flex justify-between  items-center">
        <button
          onClick={() => {
            changePage("");
          }}
          className="flex justify-center  items-center   border-y-2 rounded-md  shadow-inside shadow-gray-500  p-1"
        >
          <img
            src={bullbear}
            alt="bullbearLogo"
            style={{ width: "30px", height: "30px" }}
          />

          <h2 className="font-serif capitalize  text-[1.2rem]  tracking-wide">
            {domain}
          </h2>
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
          {showNav ? (
            <LiaTimesSolid className="text-[1.3rem]" />
          ) : (
            <RxHamburgerMenu className="text-[1.3rem]" />
          )}
        </button>
      </section>
      <AnimatePresence>
        <motion.section
          initial={{ y: -90 }}
          whileInView={{ x: 0, y: 0 }}
          transition={{
            delay: 0,
            duration: 0.5,
            delayChildren: 0.5,
            staggerChildren: 0.5,
          }}
          className={`w-full  min-h-[5rem]  bg-white  z-50  flex justify-center   items-start sm:hidden  ${
            !showNav ? "hidden" : "block  z-50"
          }`}
        >
          <motion.ul
            initial={{ y: -70 }}
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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0, duration: 0.8 }}
              className="header-mobile-li-style  "
              onClick={() => changePage("about#about-head")}
            >
              {/* <Link to="/about" className=" header-mobile-link-style "> */}{" "}
              About Us {/* </Link> */}
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0, duration: 0.8 }}
              className="header-mobile-li-style  "
              onClick={() => changePage("milestone")}
            >
              {/* <Link to="/about" className=" header-mobile-link-style "> */}
              Milestone {/* </Link> */}
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0, duration: 0.8 }}
              className="header-mobile-li-style  "
              onClick={() => changePage("update")}
            >
              {/* <Link to="/about" className=" header-mobile-link-style "> */}
              Updates {/* </Link> */}
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0, duration: 0.8 }}
              className="header-mobile-li-style  "
              onClick={() => changePage("contact")}
            >
              {/* <Link to="/about" className=" header-mobile-link-style "> */}
              Contact Us {/* </Link> */}
            </motion.li>

            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0, duration: 0.8 }}
              className="capitalize   font-serif   underline  text-balance underline-offset-2    "
              onClick={() => changePage("login")}
            >
              {/* <Link to="/about" className=" header-mobile-link-style "> */}
              Sign In{/* </Link> */}
            </motion.li>

            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0, duration: 0.8 }}
              className="capitalize   font-serif   underline  text-balance underline-offset-2    "
              onClick={() => changePage("register")}
            >
              {/* <Link to="/about" className=" header-mobile-link-style "> */}
              Sign Up {/* </Link> */}
            </motion.li>
          </motion.ul>
        </motion.section>
      </AnimatePresence>
    </header>
  );

  return content;
}
