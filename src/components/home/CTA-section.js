import React from "react";

const CTASection = ({ setShowModal }) => {
  return (
    <div className="md:mx-auto md:container px-4 my-4">
      <div className="pb-32 pt-16">
        <div className="mx-auto">
          <div className="flex flex-wrap flex-row-reverse items-center">
            <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
              <div className="py-2 text-color">
                <div>
                  <h1 className="text-4xl tracking-tighter md:leading-snug f-f-l font-black">
                    Francisco José de Caldas, El Sabio de Colombia
                  </h1>
                </div>
                <p className="text-xl leading-7 md:leading-10 f-f-r py-8">
                  Naturalista, geógrafo, ingeniero, astrónomo, científico,
                  periodista, militar, botánico… fue conocido entre sus
                  contemporáneos como El Sabio debido a su formidable erudición
                  y caudal de conocimientos. Además, fue una de las
                  personalidades más influyentes en la independencia de
                  Colombia. <br /> La vida de Francisco José de Caldas parece
                  extraída de una película. Nacido en 1771, desde muy niño
                  mostró gran interés por las matemáticas, ciencias físicas y
                  astronomía...
                </p>
                <button
                  onClick={() => setShowModal((prevState) => !prevState)}
                  className="flex items-center cursor-pointer pb-4 md:pb-0 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none"
                >
                  <span className="outline-none text-xl font-semibold text-indigo-700">
                    Leer más
                  </span>
                </button>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
              <img
                className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                src="https://www.eltiempo.com/files/image_640_428/uploads/2018/10/28/5bd66a4763ce3.jpeg"
                alt="img_fjc-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
