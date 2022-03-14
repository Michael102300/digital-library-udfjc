import React from "react";
import { Fragment } from "react";
import { useState } from "react";

import Banner from "../components/home/Banner";
import CTASection from "../components/home/CTA-section";
import PrototypesSection from "../components/home/Prototypes-section";
import ModalFJC from "../components/modal/Modal-FJC";
import ModalMR from "../components/modal/Modal-MR";

const HomePage = () => {
  const [showModalFJC, setShowModalFJC] = useState(false);
  const [showModalMR, setShowModalMR] = useState(false);
  return (
    <Fragment>
      <Banner />
      <CTASection setShowModal={setShowModalFJC} />
      <PrototypesSection setShowModalMR={setShowModalMR} />
      <ModalFJC showModal={showModalFJC} setShowModal={setShowModalFJC} />
      <ModalMR showModal={showModalMR} setShowModal={setShowModalMR} />
    </Fragment>
  );
};

export default HomePage;
