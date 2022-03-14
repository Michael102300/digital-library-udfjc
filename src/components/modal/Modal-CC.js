import React from "react";
import HipsometroPhoto from "../../assets/img/cuarto-circulo.png";

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
              Cuarto de círculo
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
                Es un antiguo instrumento utilizado para medir ángulos en
                Astronomía y navegación. Utilizado por Francisco José de Caldas,
                del cual construyó el suyo a partir de las láminas de sus
                libros. Se llama cuadrante o astrolabio (una de sus clases),
                porque consiste en una placa graduada con forma de cuarto de
                círculo. En uno de sus lados hay una mirilla para dirigirla
                hacia el astro deseado. Del vértice cuelga una plomada que
                indica la dirección vertical.La lectura se obtiene de la
                posición de la cuerda sobre el arco graduado.
              </p>
            </div>
            <p className="text-base leading-relaxed text-gray-900 dark:text-gray-800">
              Los astrónomos lo usaban para medir la altura de los astros por
              encima del horizonte. Los marinos lo usaban sobre todo para
              determinar la latitud a la que se encontraban, midiendo la altura
              sobre el horizonte de la estrella polar o del Sol al mediodía; así
              como para determinar la hora del día.
            </p>
            <h2 className="text-2xl leading-4">
              Implicaciones en la actualidad
            </h2>
            <div className="flex">
              <img
                src="http://armada.defensa.gob.es/ArmadaPortal/ShowProperty;jsessionid=1BfGh2nLVN22SLVgzhLNSSQ7lTTZHwczPPdXkQJxj4GLXcsH2NNn!-1135168?nodeId=%2FBEA+Repository%2F60486%2F%2Fimagen&_pageLabel=cienciaobservatorio"
                alt="HipsometroPhoto"
                className="h-60 mr-5"
              />
              <p className="text-base leading-relaxed text-gray-900 dark:text-gray-800">
                Identificar el anillo de Saturno, los satélites de Jupiter y
                fnalmente determinó la posición de Popayán. Asi con esto tener
                una ubicacion mas exacta de la ciudad de nacimiento de Caldas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalHS;
