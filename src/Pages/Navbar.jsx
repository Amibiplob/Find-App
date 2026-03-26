import { Github } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const navItem = [
    { path: "/", label: "Home" },
    { path: "/apps", label: "Apps" },
    { path: "/installapps", label: "Installation" },
  ];
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItem.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.path}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "my-1"
                      : isActive
                        ? "bg-amber-500 my-1"
                        : " my-1"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <Link to="/" className="btn btn-ghost text-xl pl-0">
            <img src={logo} className="h-8 w-8" alt="Logo" />
            <span> Find App</span>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItem.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.path}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-amber-500" : ""
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="https://github.com/Amibiplob/Find-App" className="btn">
          <Github />
          Contribute
        </Link>
      </div>
    </div>
  );
}
