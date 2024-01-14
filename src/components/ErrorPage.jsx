import { useRouteError } from "react-router-dom";
import errorLogo from "../assets/images/404/404.gif";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="font-rancho max-w-6xl mx-auto bg-black" id="error-page">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="p-10 mx-auto flex justify-center rounded-2xl">
        <img className="w-full rounded-2xl h-[500px]" src={errorLogo} alt="" />
      </div>
      <p className="mx-auto text-center text-6xl">
        <i>{error.statusText || error.message}</i>
      </p>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}