import React from "react";
import Caldas from "../../assets/img/caldas.png";

const ModalFJC = ({ showModal, setShowModal }) => {
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
              Francisco José de Caldas, El Sabio de Colombia
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
              <img src={Caldas} alt="photo_sabio" className="h-60 mr-5" />
              <p className="text-base leading-relaxed text-gray-900 dark:text-gray-800">
                Queremos acercarnos a la historia de Francisco José de Caldas.
                Naturalista, geógrafo, ingeniero, astrónomo, científico,
                periodista, militar, botánico… fue conocido entre sus
                contemporáneos como El Sabio debido a su formidable erudición y
                caudal de conocimientos. Además, fue una de las personalidades
                más influyentes en la independencia de Colombia.
              </p>
            </div>
            <p className="text-base leading-relaxed text-gray-900 dark:text-gray-800">
              La vida de Francisco José de Caldas parece extraída de una
              película. Nacido en 1771, desde muy niño mostró gran interés por
              las matemáticas, ciencias físicas y astronomía, si bien estudió
              derecho por presiones familiares. Los numerosos viajes que realizó
              por motivos comerciales durante finales del siglo XVIII le dieron
              la oportunidad de determinar la posición geográfica de los lugares
              que visitaba, así como de realizar observaciones sobre la
              naturaleza y las costumbres de distintos pueblos y llevar a cabo
              diferentes experimentos científicos.
            </p>
            <p className="text-base leading-relaxed text-gray-900 dark:text-gray-800">
              Nacido en Popayán y dotado de una fecunda inteligencia, cursó
              estudios de Latinidad y Filosofía en el colegio Seminario bajo la
              dirección de José Félix de Restrepo. Estudió Derecho en el Colegio
              Rosario, investigó y profundizó por su cuenta, matemáticas,
              geografía, física, cartografía y astronomía. Centró su atención en
              determinar la latitud, longitud y altitud de muchos lugares en el
              sur de la Nueva Granada con el próposito de elaborar una gran
              carta del Virreinato, e inventó un método para medir la altura de
              las montañas por medio del termómetro. En 1801, inició
              investigaciones botánicas en el Ecuador. En 1805, J.C. Mutis lo
              vinculó como director del Observatorio Astronómico. En Enero de
              1808, fundó El Semanario del Nuevo Reino de Granada, órgano de
              difusión del pensamiento científico y cultura de la época. Entre
              1813 y 1814 dirigió la construcción de fortificaciones sobre el
              río Cauca, instaló la producción de fusiles, una nitrería y un
              molido de pólvora. En la Maetranza de Rionegro dirigió la
              fundación de piezas de artillería y fundó la primera Academia de
              Ingenieros Militares. Fue condenado a muerte en Santa Fe el 26 de
              octubre de 1816 y ejecutado el dia siguiente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFJC;
