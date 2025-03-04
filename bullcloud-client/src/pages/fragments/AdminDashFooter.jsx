import { adminDashboardFooterData } from "../../data";
import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { MdLibraryMusic } from "react-icons/md";
import { FaUpload } from "react-icons/fa";

export default function AdminDashFooter() {
  const content = (
    <footer className="w-full  bg-black  rounded-t-lg   text-white   border-t-2 border-t-gray-500      sticky bottom-0 ">
      <ul className="w-[75%] h-[4rem] mx-auto  flex justify-around  items-center">
        {adminDashboardFooterData.map((data) => (
          <li key={data.id}>
            <Link to={data.url} className="link-style">
              {data.comp}
              <h5 className="icon-name">{data.name}</h5>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );

  return content;
}
