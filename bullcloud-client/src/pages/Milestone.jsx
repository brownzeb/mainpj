import { domain, milestone } from "../data";
import mstone from "../assets/achievements.jpg";

export default function Milestone() {
  const content = (
    <main className=" w-full bg-white   min-h-screen">
      {/* MILESTONE IMG */}
      <section
        id="about-head"
        className="w-full  md:h-[30rem] h-[20rem] pl-4     relative pt-2"
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
        <h2 className="w-[98%] underline underline-offset-4  capitalize  mx-auto font-black text-gray-700">
          milestone from 2016 - 2024
        </h2>
        {milestone.map((data) => (
          <div
            key={data.id}
            className="w-[90%] mx-auto flex flex-col  text-center justify-center items-center "
          >
            <div className="w-[0.1rem] h-[3rem] mx-auto  bg-red-500"></div>
            <div className="w-[99%] min-h-[5rem]  p-2      gap-3 mx-auto bg-white   border-2  border-red-500 ">
              <h5 className="   font-bold tracking-wide text-yellow-500 ">
                {" "}
                {data.head}
              </h5>
              <p className="z-30  text-gray-400">{data.msg}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );

  return content;
}
