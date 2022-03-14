import React from "react";
import HipsometroPhoto from "../../assets/img/cartografico.png";

const ModalPCNG = ({ showModal, setShowModal }) => {
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
              Proyecto cartografico de la Nueva Granada
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
                Caldas le presenta a Mutis en 1802 ya se esboza esta idea sobre
                la observación de la cordillera. Esta serie de perfiles de los
                Andes se construye de sur a norte y cubre una vasta extensión de
                la cordillera de los Andes desde Loxa, 4° de latitud sur, hasta
                el Cayambur al norte de Quito, 0° 30´. Una panorámica desde el
                Océano Pacífico en que se presentan las líneas isotérmicas
                medidas en toesas y que sirven para identificar las alturas en
                las que se cultivan plantas útiles como las quinas, la canela o
                el maíz entre otras.
              </p>
            </div>
            <p className="text-base leading-relaxed text-gray-900 dark:text-gray-800">
              En el mapa también se representan las poblaciones, sus respectivas
              alturas y los accidentes geográficos en la costa del Pacífico
              vistas desde el mar. Además encontramos una versión del mismo
              perfil bellamente coloreado, en apariencia sin terminar, pero que
              representa no sólo las riquezas de los Andes, sino la belleza de
              sus montañas. Las poblaciones en este caso son representadas por
              dibujos miniaturas en lugar de las convenciones del proyecto del
              Atlas. En estas imágenes se confunden los objetivos de la
              cartografía, la botánica y la pintura de paisajes
            </p>
            <h2 className="text-2xl leading-4">
              Implicaciones en la actualidad
            </h2>
            <div className="flex justify-around">
              <img
                src="https://1.bp.blogspot.com/-3_D7noOHd7U/YDW1GyejrPI/AAAAAAAAtrk/dceElyewc9szo016_UzdYXdQX0hLTQz5wCLcBGAsYHQ/w170-h238/WhatsApp%2BImage%2B2021-02-23%2Bat%2B9.08.04%2BPM.jpeg"
                alt="HipsometroPhoto"
                className="h-60 mr-5"
              />
              <img
                src="https://lh3.googleusercontent.com/-Fw5Si6ETE5U/YDJeHZXAX8I/AAAAAAAAUAc/AyB-bLDDOUMvplK_vs9tun10ZJYA9M_NACLcBGAsYHQ/w216-h138/image.png"
                alt="HipsometroPhoto"
                className="h-60 mr-5"
              />
            </div>
            <p className="text-base leading-relaxed text-gray-900 dark:text-gray-800">
              Conocer el mapa de la Nueva Granada en 1815 con esto dimensionar y
              conocer la geografía con el cambio desde la epoca hasta la de hoy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPCNG;
