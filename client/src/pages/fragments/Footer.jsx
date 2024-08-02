import { footerData } from "../../data";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { domain } from "../../data";

export default function Footer() {
  const content = (
    <footer className=" w-full  min-h-[12rem]  rounded-t-[2rem]  bg-[#0a0c0c]  text-white pt-2">
      <section className="h-full w-[85%]  mx-auto  flex flex-col justify-around  gap-3  items-center ">
        {/* <div className="w-[80%] mx-auto lg:mr-auto  flex justify-around  items-center">
          <Link
            className="text-[1.2rem]  font-bold  text-white text-center  underline underline-offset-4 tracking-wider  p-2"
            to="/register"
          >
            Signin &#10138;
          </Link>

          <Link
            className="text-[1.2rem]  font-bold  text-white text-center  underline underline-offset-4  tracking-wider rounded-md  p-2"
            to="/register"
          >
            Signup &#10138;
          </Link>
        </div> */}
        {/* <hr className=" w-[50%] mx-auto my-2   bg-gray-400   " /> */}
        <div className="w-full mx-auto  text-center   grid     grid-cols-2  lg:grid-cols-3  gap-4  ">
          {footerData.map((data) => (
            <div
              key={data.id}
              className=" w-full min-h-fit  flex flex-col justify-center gap-3  items-center"
            >
              <h2 className="text-yellow-500 tracking-wide font-bold">
                {data.head}
              </h2>
              <ul>
                {data.children.map((dt) => (
                  <li
                    className="text-white tracking-wide  borser-b-2 border-b-gray-400"
                    key={dt.id}
                  >
                    <Link to={dt.url} className="">
                      {dt.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className=" w-[80%] mx-auto flex justify-around    border-y-2 border-y-gray-500 py-3 items-center">
          <Link to="#">
            {" "}
            <FaFacebook className="icon-style" />
          </Link>
          <Link to="#">
            {" "}
            <FaInstagramSquare className="icon-style" />
          </Link>
          <Link to="#">
            {" "}
            <FaXTwitter className="icon-style" />
          </Link>
        </div>
        <p className="w-[80%] mx-auto  text-center">&copy; 2024 {domain}</p>
      </section>
    </footer>
  );

  return content;
}
