import { dashboardFooterData } from "../../data";
import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { MdLibraryMusic } from "react-icons/md";
import { FaUpload } from "react-icons/fa";

export default function DashboardFooter() {
  const content = (
    <footer className="w-full  bg-black   rounded-t-[1rem] overflow-hidden   text-white   border-t-2 border-t-black      sticky bottom-0 ">
      <ul className="w-[99%] min-h-[3.5rem] mx-auto  flex justify-around   items-center ">
        {dashboardFooterData.map((data) => (
          <li key={data.id}>
            <Link to={data.url} className="link-style     text-red-500     ">
              {data.comp}
              <h5 className="icon-name text-white ">{data.name}</h5>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );

  return content;
}
