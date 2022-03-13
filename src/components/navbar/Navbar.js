import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-between pr-10">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block h-14 w-auto"
                src="https://www.udistrital.edu.co/themes/custom/versh/logo.png"
                alt="Workflow"
              />
            </div>
            <div className="hidden sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to={"/"}
                  className={`${
                    pathname === "/"
                      ? "bg-white text-black border-black border-b-2"
                      : "text-black hover:border-gray-400 hover:border-b-2"
                  } px-3 py-2 text-sm font-medium border-solid `}
                >
                  Inicio
                </Link>
                <Link
                  to={"/prototypes"}
                  className={`${
                    pathname === "/prototypes"
                      ? "bg-white text-black border-black border-b-2"
                      : "text-black hover:border-gray-400 hover:border-b-2"
                  } px-3 py-2 text-sm font-medium border-solid `}
                >
                  Prototipos
                </Link>

                <Link
                  to={"/about-fjc"}
                  className={`${
                    pathname === "/about-fjc"
                      ? "bg-white text-black border-black border-b-2"
                      : "text-black hover:border-gray-400 hover:border-b-2"
                  } px-3 py-2 text-sm font-medium border-solid `}
                >
                  Francisco Jose de Caldas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div className=" hidden px-2 pt-2 pb-3 space-y-1">
          <Link
            to={"/"}
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Prototipos
          </Link>

          <Link
            to={"/prototypes"}
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Prototipos
          </Link>

          <Link
            to={"/about-fjc"}
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Francisco Jose de Caldas
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
