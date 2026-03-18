import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import notFound from "../assets/error-404.png";
import { Link } from "react-router";
export default function ErrorPage() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto">
        <img src={notFound} alt="Not Found" className="mx-auto m-8" />
      </div>
      <div className="text-center m-8">
        <h1 className="text-4xl font-bold p-5">Oops, page not found!</h1>
        <p className="">The page you are looking for is not available.</p>
      </div>
      <div className=" my-5 w-max mx-auto">
        <Link to="/" className="btn">
          Back To Home
        </Link>
      </div>
      <Footer />
    </div>
  );
}
