import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import ModalRB from "./components/modal/Mdal-RB";

function App() {
  const [showModalRB, setShowModalRB] = useState(false);

  return (
    <Router>
      <Navbar setShowModal={setShowModalRB} />
      <ModalRB setShowModal={setShowModalRB} showModal={showModalRB} />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
