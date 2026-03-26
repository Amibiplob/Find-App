import React from "react";
import appNotFound from "../assets/App-Error.png";
import { Link } from "react-router";
export default function AppErrorPage() {
  return (
    <div>
      <div className="mx-auto">
        <img src={appNotFound} alt="Not Found" className="mx-auto m-8" />
      </div>
      <div className="text-center m-8">
        <h1 className="text-4xl font-bold p-5">OPPS!! APP NOT FOUND</h1>
        <p>
          The App you are requesting is not found on our system. please try
          another apps
        </p>
      </div>
      <div className=" my-5 w-max mx-auto">
        <Link to="/" className="btn">
          Back To Home
        </Link>
      </div>
    </div>
  );
}
