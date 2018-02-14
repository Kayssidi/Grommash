import "../node_modules/grommet-css";
// or https://rawgit.com/grommet/grommet/stable/grommet.min.css ?

import React from "react";
import { render } from "react-dom";

import GrommetApp from "grommet/components/Grommet";
import Footer from "grommet/components/Footer";

import MenuHeader from "./components/menuHeader";
import MainPage from "./pages/mainPage";
import ReservationPage from "./pages/reservationPage";

const MyApp = () => (
  <GrommetApp>
    <MenuHeader />

    <MainPage />

    <Footer />
  </GrommetApp>
);

render(<MyApp />, document.getElementById("root"));
