import React from "react";

const Navbar = ({ setShowModal }) => {
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
            <div className="sm:ml-6">
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowModal((prevState) => !prevState)}
                  className={`text-black hover:border-gray-400 hover:border-b-2 px-3 py-2 text-sm font-medium border-solid `}
                >
                  Webgrafia
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <button
            onClick={() => setShowModal((prevState) => !prevState)}
            className={`text-black hover:border-gray-400 hover:border-b-2 px-3 py-2 text-sm font-medium border-solid `}
          >
            Webgrafia
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
