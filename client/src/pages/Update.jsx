import { domain, updateData } from "../data";

export default function Update() {
  const content = (
    <main className="min-h-screen  w-full  bg-white">
      <section className="w-full  justify-center  items-center">
        <h2 className="  text-center  font-bold  my-4  capitalize tracking-wider mx-auto  text-black">
          {domain} Updates
        </h2>
        <div className="w-full   my-4 flex flex-col  lg:flex-row justify-around  items-center  gap-6 ">
          {updateData.map((data) => (
            <article
              key={data.id}
              className="min-h-full w-[90%]    mx-auto text-left  tracking-wide pl-2  flex  flex-col justify-around  items-around  gap-3 "
            >
              <h6 className="text-black  tracking-wider font-bold  underline underline-offset-2">
                {data.head}
              </h6>
              <img
                src={data.imgUrl}
                alt="updates"
                className="w-[12rem] my-3  h-[12rem]"
              />

              <p className="min-h-full">{data.msg}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );

  return content;
}
