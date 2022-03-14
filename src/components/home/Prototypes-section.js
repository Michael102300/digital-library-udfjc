import React from "react";
import MolinoRotacionPhoto from "../../assets/img/molino-rotacion-1.jpg";
import HipsometroPhoto from "../../assets/img/hipsometro-1.jpg";
import Telescopio from "../../assets/img/telescopio.png";
import Cartografico from "../../assets/img/cartografico.png";
import CuartoCirculo from "../../assets/img/cuarto-circulo.png";

const PrototypesSection = ({ setShowModalMR }) => {
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
              className="focus:outline-none my-auto"
              aria-label="card 1"
            >
              <img
                className="focus:outline-none w-full  rounded-t-3xl "
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
                  <button
                    onClick={() => setShowModalMR((prevState) => !prevState)}
                    className="focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-600 hover:opacity-75 mt-4 justify-end flex items-center cursor-pointer"
                  >
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
                    className="focus:outline-none w-full rounded-t-3xl max-h-72 "
                    src={HipsometroPhoto}
                    alt="molino_rotacion"
                  />
                  <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                    <p
                      tabIndex="0"
                      className="focus:outline-none  text-sm text-white font-semibold tracking-wide"
                    >
                      Hipsómetro
                    </p>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                    >
                      1804
                    </p>
                  </div>
                  <div className="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                    <h1
                      tabIndex="0"
                      className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider"
                    >
                      Hipsómetro
                    </h1>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2"
                    >
                      Al terminar sus estudios, fue inspirado por varios textos
                      de autores que buscaban redescubrir América, aprovechando
                      su locación (Popayán) para determinar la latitud, la
                      longitud y la altitud...
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
                  </div>
                </div>
                <div
                  tabIndex="0"
                  className="focus:outline-none"
                  aria-label="card 3"
                >
                  <img
                    className="focus:outline-none  w-full max-h-72 rounded-t-3xl "
                    src={CuartoCirculo}
                    alt="CuartoCirculo"
                  />
                  <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                    >
                      Cuarto de círculo
                    </p>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                    ></p>
                  </div>
                  <div className="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                    <h1
                      tabIndex="0"
                      className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider"
                    >
                      Cuarto de círculo
                    </h1>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2"
                    >
                      Es un antiguo instrumento utilizado para medir ángulos en
                      Astronomía y navegación. Utilizado por Francisco José de
                      Caldas, del cual construyó el suyo a partir de las láminas
                      de sus libros...
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
                    className="focus:outline-none  w-full max-h-72 rounded-t-3xl "
                    src={Telescopio}
                    alt="Telescopio"
                  />
                  <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                    >
                      Bruce Telescopio
                    </p>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                    ></p>
                  </div>
                  <div className="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                    <h1
                      tabIndex="0"
                      className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider"
                    >
                      Telescopio
                    </h1>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2"
                    >
                      "Caldas construyo un pequeño telescopio a partir de un par
                      de lentes que había encontrado en Popayán, con el que pudo
                      observar, como el mismo dijera, el anillo de Saturno, los
                      satélites de Júpiter y las zonas oscuras de este planeta.”
                    </p>
                    <div className="h-10 w-full"></div>
                    <div className=" hidden w-full h-20 justify-end">
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
                  </div>
                </div>
                <div
                  tabIndex="0"
                  className="focus:outline-none"
                  aria-label="card 5"
                >
                  <img
                    className="focus:outline-none  w-full max-h-72 rounded-t-3xl "
                    src={Cartografico}
                    alt="Cartografico"
                  />
                  <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                    >
                      Proyecto cartografico de la nueva granada
                    </p>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                    >
                      1815
                    </p>
                  </div>
                  <div className="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                    <h1
                      tabIndex="0"
                      className="focus:outline-none  text-lg text-gray-900 font-semibold tracking-wider"
                    >
                      Proyecto cartografico de la nueva granada
                    </h1>
                    <p
                      tabIndex="0"
                      className="focus:outline-none  text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2"
                    >
                      Caldas le presenta a Mutis en 1802 ya se esboza esta idea
                      sobre la observación de la cordillera. Esta serie de
                      perfiles de los Andes se construye de sur a norte y cubre
                      una vasta extensión...
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
