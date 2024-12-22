import { Link } from "react-router-dom";
import Header from "./fragments/Header";
import Footer from "./fragments/Footer";

function NotFoundPage({ errPage }) {
  const content = (
    <main className="w-full min-h-screen bg-black  flex justify-center  items-center  text-white">
      <h2>404 Page not found: </h2>
      <Link className="text-blue-500 text-[1.3rem] ml-3 " to="/">
        Return to home
      </Link>
    </main>
  );

  return content;
}

export default NotFoundPage;
