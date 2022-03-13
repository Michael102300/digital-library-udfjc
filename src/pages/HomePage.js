import React from "react";
import { Fragment } from "react";
import { useState } from "react";

import Banner from "../components/home/Banner";
import CTASection from "../components/home/CTA-section";
import PrototypesSection from "../components/home/Prototypes-section";
import ModalFJC from "../components/modal/Modal-FJC";

const HomePage = () => {
  const [showModalFJC, setShowModalFJC] = useState(false);
  return (
    <Fragment>
      <Banner />
      <CTASection setShowModal={setShowModalFJC} />
      <PrototypesSection />
      <ModalFJC showModal={showModalFJC} setShowModal={setShowModalFJC} />
    </Fragment>
  );
};

export default HomePage;
