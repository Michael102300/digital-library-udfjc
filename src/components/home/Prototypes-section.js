import React from "react";
import MolinoRotacionPhoto from "../../assets/img/molino-rotacion-1.jpg";

const PrototypesSection = () => {
  return (
    <div className="bg-gray-100 px-4 xl:px-4 py-14">
      <div className="mx-auto container">
        <span>
          <h1 className="focus:outline-none text-center text-3xl lg:text-5xl tracking-wider text-gray-900">
            Prototipos del Sabio Caldas
          </h1>
        </span>
        <div className="focus:outline-none mt-12 lg:mt-24">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            <div
              tabIndex="0"
              className="focus:outline-none"
              aria-label="card 1"
            >
              <img
                className="focus:outline-none w-full rounded-t-3xl"
                src={MolinoRotacionPhoto}
                alt="molino_rotacion"
              />
              <div className="py-4 px-8 w-full flex justify-between bg-indigo-700">
                <p
                  tabIndex="0"
                  className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                >
                  Molino de rotacion
                </p>
                <p
                  tabIndex="0"
                  className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                >
                  1815
                </p>
              </div>
              <div className="bg-white px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                <h1
                  tabIndex="0"
                  className="focus:outline-none text-4xl text-gray-900 font-semibold tracking-wider"
                >
                  Molino de rotacion
                </h1>
                <p
                  tabIndex="0"
                  className="focus:outline-none text-gray-700 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12"
                >
                  Una de las contribuciones del Sabio Caldas a la lucha de la
                  Independencia fue la fabricación de pólvora, para su
                  elaboración era necesario el nitro, el cual era escaso en esa
                  época, por eso se monto una nitrería para procesar este
                  ingrediente. Así fue como en 1815 inauguro el molino de
                  pólvora con el objetivo de preparar la defensa de Antioquia.
                </p>
                <div className="w-full flex justify-end">
                  <button className="focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-600 hover:opacity-75 mt-4 justify-end flex items-center cursor-pointer">
                    <span className=" text-base tracking-wide text-indigo-700">
                      Conocer mas
                    </span>
                    <img
                      className="ml-2"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/2-column-with-main-and-supporting-svg1.svg"
                      alt="arrow"
                    />
                  </button>
                </div>
                <div className="h-5 w-2"></div>
              </div>
            </div>
            <div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                <div
                  tabIndex="0"
                  className="focus:outline-none "
                  aria-label="card 2"
                >
                  <img
                    className="focus:outline-none w-full"
                    src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(2).png"
                    alt="games"
                  />
                  <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                    <p
                      tabIndex="0"
                      className="focus:outline-none  text-sm text-white font-semibold tracking-wide"
                    >
                      Bruce Wayne
                    </p>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                    >
                      13TH Oct, 2020
                    </p>
                  </div>
                  <div className="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                    <h1
                      tabIndex="0"
                      className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider"
                    >
                      Transactions
                    </h1>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2"
                    >
                      Find the latest events updates or create events, concerts,
                      conferences, workshops...
                    </p>
                  </div>
                </div>
                <div
                  tabIndex="0"
                  className="focus:outline-none"
                  aria-label="card 3"
                >
                  <img
                    className="focus:outline-none  w-full"
                    src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(3).png"
                    alt="notes"
                  />
                  <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                    >
                      Bruce Wayne
                    </p>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                    >
                      13TH Oct, 2020
                    </p>
                  </div>
                  <div className="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                    <h1
                      tabIndex="0"
                      className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider"
                    >
                      Transactions
                    </h1>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2"
                    >
                      Find the latest events updates or create events, concerts,
                      conferences, workshops...
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                <div
                  tabIndex="0"
                  className="focus:outline-none "
                  aria-label="card 4"
                >
                  <img
                    className="focus:outline-none w-full"
                    src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(4).png"
                    alt="laptop"
                  />
                  <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                    >
                      Bruce Wayne
                    </p>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                    >
                      13TH Oct, 2020
                    </p>
                  </div>
                  <div className="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                    <h1
                      tabIndex="0"
                      className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider"
                    >
                      Transactions
                    </h1>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2"
                    >
                      Find the latest events updates or create events, concerts,
                      conferences, workshops...
                    </p>
                  </div>
                </div>
                <div
                  tabIndex="0"
                  className="focus:outline-none"
                  aria-label="card 5"
                >
                  <img
                    className="focus:outline-none w-full"
                    src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(5).png"
                    alt="worker"
                  />
                  <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                    >
                      Bruce Wayne
                    </p>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                    >
                      13TH Oct, 2020
                    </p>
                  </div>
                  <div className="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                    <h1
                      tabIndex="0"
                      className="focus:outline-none  text-lg text-gray-900 font-semibold tracking-wider"
                    >
                      Transactions
                    </h1>
                    <p
                      tabIndex="0"
                      className="focus:outline-none  text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2"
                    >
                      Find the latest events updates or create events, concerts,
                      conferences, workshops...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrototypesSection;
