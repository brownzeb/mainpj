import { domain, updateData } from "../data";
import { FaArrowDown } from "react-icons/fa";

export default function Update() {
  const content = (
    <main className="min-h-screen  w-full  bg-white">
      <section className="w-full  min-h-full flex flex-col  justify-around  items-center">
        <h2 className="  text-center  text-[1.4rem]  font-bold  my-4  capitalize tracking-wider mx-auto  text-black">
          Our Updates
        </h2>
        <div className="w-full   my-4 grid grid-cols-1  lg:grid-cols-2 place-content-center    gap-6 ">
          {updateData.map((data) => (
            <article
              key={data.id}
              className="min-h-full w-[98%]    mx-auto text-center  tracking-wide pl-2  flex  flex-col justify-around  items-center  gap-3 "
            >
              <h6 className="text-red-500  tracking-wider font-bold  underline underline-offset-2">
                {data.head}
              </h6>
              <div>
                <img
                  src={data.imgUrl}
                  alt="updates"
                  className="w-full my-3  h-[12rem]"
                />
              </div>

              <p className="min-h-full  text-left  text-gray-500">{data.msg}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );

  return content;
}
