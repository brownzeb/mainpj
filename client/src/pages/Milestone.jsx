import { domain, milestone } from "../data";
import mstone from "../assets/mstone.jpg";

export default function Milestone() {
  const content = (
    <main className=" w-full white bg-gradient-to-b from-gray-300 to-white text-white  min-h-screen">
      {/* MILESTONE IMG */}
      <section
        id="about-head"
        className="w-full  md:h-[30rem] h-[20rem] pl-4  bg-gray-300   relative pt-2"
      >
        <h2 className=" font-bold text-[1.3rem]  text-black  tracking-wide   capitalize  ">
          Milestone
        </h2>
        <div className=" h-1 w-[12rem] right-7 bg-blue-500  "></div>

        <div className=" w-1 h-[12rem] bg-blue-500  "></div>

        <article className="w-[80%] h-[80%]   bg-transparent  right-0 bottom-0  flex flex-col  justify-around  items-center  absolute">
          <img src={mstone} alt="abt" className=" min-w-full   min-h-full" />
        </article>
      </section>
      <section className="w-full  my-[4rem] tracking-wide  text-center  flex flex-col justify-around  items-center ">
        {/* <img src={mstone} alt="milestone" className="w-[90%] mx-auto h-[50%]" /> */}
        <h2 className="w-[98%] underline underline-offset-4  capitalize  mx-auto font-black text-gray-700">
          milestone from 2016 - 2024
        </h2>
        {milestone.map((data) => (
          <div
            key={data.id}
            className="w-[98%] mx-auto flex flex-col  text-center justify-center items-center "
          >
            <div className="w-1 h-[3rem] mx-auto  bg-gray-700"></div>
            <div className="w-[60%] min-h-[5rem]  p-2  rounded-t-xl  gap-3 mx-auto bg-gray-700 ">
              <h5 className="   font-bold tracking-wide text-yellow-500 ">
                {" "}
                {data.head}
              </h5>
              <p className="z-30">{data.msg}</p>
              {/* <div className="custom-shape-divider-bottom-1723941470  z-0">
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    className="shape-fill"
                  ></path>
                </svg>
              </div> */}
            </div>
          </div>
        ))}
      </section>
    </main>
  );

  return content;
}
