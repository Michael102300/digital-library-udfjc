import React from "react";
import HipsometroPhoto from "../../assets/img/hipsometro-1.jpg";

const ModalHS = ({ showModal, setShowModal }) => {
  return (
    <div
      className={`${
        showModal ? "flex" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0 bg-slate-200 bg-opacity-75`}
    >
      <div className="relative px-4 w-full max-w-3xl flex justify-center items-center">
        {/* <!-- Modal content --> */}
        <div
          className="relative bg-white rounded-lg shadow-lg overflow-y-auto no-scrollbar"
          style={{ maxHeight: "95vh" }}
        >
          {/* <!-- Modal header --> */}
          <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl ">
              Hipsómetro
            </h3>
            <button
              onClick={() => setShowModal((prevState) => !prevState)}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-indigo-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-6 space-y-6 relative">
            <div className="flex">
              <img
                src={HipsometroPhoto}
                alt="HipsometroPhoto"
                className="h-60 mr-5"
              />
              <p className="text-base leading-relaxed text-gray-900 dark:text-gray-800">
                Al terminar sus estudios, fue inspirado por varios textos de
                autores que buscaban redescubrir América, aprovechando su
                locación (Popayán) para determinar la latitud, la longitud y la
                altitud, así como observar la geografía . la topografía, la
                astronomía, las costumbres, la medicina y la arqueología de
                tales lugares. Luego de este inicio, inventa el hipsómetro
                termómetro que sirve para medir la altitud de un lugar
                observando la temperatura que allí empieza a hervir el agua,
                surge como un accidente al dañar un termómetro y repararlo
              </p>
            </div>

            <h2 className="text-2xl leading-4">
              Implicaciones en la actualidad
            </h2>
            <div className="flex">
              <img
                src="https://cdn.shopify.com/s/files/1/0339/7965/products/NIKO-TELEMETRO-6.jpg?v=1581101300"
                alt="HipsometroPhoto"
                className="h-60 mr-5"
              />
              <p className="text-base leading-relaxed text-gray-900 dark:text-gray-800">
                Esta version del hipsometro es portable y tiene un mayor alcance
                para estas medidas a traves de dos laseres, actualmente se
                utilizar para calibrar los termómetros, a principios del siglo
                XIX era utilizado para medir altitudes a partir de la
                observación de la temperatura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalHS;
