import React from "react";

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
              Webgrafia
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
            <p className="text-base leading-relaxed text-gray-900 dark:text-gray-800">
              A continuacion encontraras las referencias usadas para realizar la
              pagina web, sin embargo, algunos otros datos se obtuvieron en la
              visita al museo del Sabio Caldas.
            </p>
            <ul className="list-disc px-4">
              <li className="my-2 text-ellipsis	">
                https://cincuentopia.com/francisco-jose-caldas-sabio-colombia/
              </li>
              <li className="my-2 text-ellipsis	">
                https://www.fundacaldaspopayan.com/biografia-del-sabio-caldas/
              </li>
              <li className="my-2 text-ellipsis	">
                https://ellegadodelsabio.blogspot.com/p/prototipos-de-caldas.html
              </li>
              <li className="my-2 text-ellipsis	">
                https://prototipos-sabiocaldas.blogspot.com/2021/02/instrumentos-elaborado-por-caldas.html
              </li>
              <li className="my-2 text-ellipsis	">
                https://www.parqueexplora.org/sites/default/files/pictures/aprende/ProyectoFrancisco%20
                Jose%CC%81%20de%20Caldas%20Ciencia%20en%20Ame%CC%81rica%20%20%282%29.pdf
              </li>
              <li className="my-2 text-ellipsis	">
                https://bibliotecadigital.udea.edu.co/bitstream/10495/19665/1/FRANCISCO%
                20JOSE%20DE%20CALDAS.pdf
              </li>
              <li className="my-2 text-ellipsis	">
                https://www.elcolombiano.com/historico/antioquia_cuna_de_la_ingenieria-PFEC_316911
              </li>
              <li className="my-2 text-ellipsis	">
                https://editorial.autonoma.edu.co/index.php/libros/catalog/download/102/92/329-2?inline=1
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalHS;
