import React from "react";
import Molino from "../../assets/img/molino-rotacion-1.jpg";

const ModalMR = ({ showModal, setShowModal }) => {
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
              Molino de rotacion
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
              <img src={Molino} alt="Molino" className="h-60 mr-5" />
              <p className="text-base leading-relaxed text-gray-900 dark:text-gray-800">
                Una de las contribuciones del Sabio Caldas a la lucha de la
                Independencia fue la fabricación de pólvora, para su elaboración
                era necesario el nitro, el cual era escaso en esa época, por eso
                se monto una nitrería para procesar este ingrediente. Así fue
                como en 1815 inauguro el molino de pólvora con el objetivo de
                preparar la defensa de Antioquia.
              </p>
            </div>
            <p className="text-base leading-relaxed text-gray-900 dark:text-gray-800">
              Caldas encontró muchas dificultades por la falta de libros y de
              experiencia que le sirviesen de guía y orientación para la
              fundición y el taladro de fusiles,pero las venció con paciencia y
              obstinación, reflexionando de manera lógica, práctica e
              ingenieril; así, terminó aprendiendo por su cuenta el arte militar
              y el de la fabricación de pólvora y armas, leyendo y asimilando
              los pocos libros a los que tuvo acceso y adaptando ese
              conocimiento a las dificultades que encontraba, casi sin recursos
              y sin gente competente en el tema que le sirviera de ayudante. Se
              sentía inspirado por los logros del mariscal de Vauban, gran
              estratega francés y promotor de la creación de la primera escuela
              de ingeniería del mundo. Aprendió también, al estudiar la
              trayectoria parabólica del proyectil, la forma apropiada de
              apuntar y acertar en un blanco elegido
            </p>
            <h2 className="text-2xl leading-4">
              Implicaciones en la actualidad
            </h2>
            <p className="text-base leading-relaxed text-gray-900 dark:text-gray-800">
              Con la elaboración de este molino, el Sabio Caldas demostro
              bastante habilidad ingenieril frente a las complicaciones que se
              le presentaron durante el proceso de contruccion, debido a esto,
              el Sabio inicio la Escuela Militar de Ingenieros debido a que iba
              orientado al conflicto armado de la epoca.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMR;
