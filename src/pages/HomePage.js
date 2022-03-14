import React from "react";
import { Fragment } from "react";
import { useState } from "react";

import Banner from "../components/home/Banner";
import CTASection from "../components/home/CTA-section";
import PrototypesSection from "../components/home/Prototypes-section";
import ModalFJC from "../components/modal/Modal-FJC";
import ModalMR from "../components/modal/Modal-MR";
import ModalHS from "../components/modal/Modal-HS";
import ModalCC from "../components/modal/Modal-CC";
import ModalPCNG from "../components/modal/Modal-PCNG";

const HomePage = () => {
  const [showModalFJC, setShowModalFJC] = useState(false);
  const [showModalMR, setShowModalMR] = useState(false);
  const [showModalHS, setShowModalHS] = useState(false);
  const [showModalCC, setShowModalCC] = useState(false);
  const [showModalPCNG, setShowModalPCNG] = useState(false);
  return (
    <Fragment>
      <Banner />
      <CTASection setShowModal={setShowModalFJC} />
      <PrototypesSection
        setShowModalMR={setShowModalMR}
        setShowModalHS={setShowModalHS}
        setShowModalCC={setShowModalCC}
        setShowModalPCNG={setShowModalPCNG}
      />
      <ModalFJC showModal={showModalFJC} setShowModal={setShowModalFJC} />
      <ModalMR showModal={showModalMR} setShowModal={setShowModalMR} />
      <ModalHS showModal={showModalHS} setShowModal={setShowModalHS} />
      <ModalCC showModal={showModalCC} setShowModal={setShowModalCC} />
      <ModalPCNG showModal={showModalPCNG} setShowModal={setShowModalPCNG} />
    </Fragment>
  );
};

export default HomePage;
