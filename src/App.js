import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import HomePage from "./components/HomePage";
import ImpactByNumbers from "./components/ImpactByNumbers";
import ChairmanMessage from "./components/ChairmanMessage";
import Footer from "./components/Footer";
import HoverCardSlider from "./components/HoverCardSlider";
import DiscoverMore from "./components/DiscoverMore";
import InvestmentPartners from "./components/InvestmentPartners ";

function App() {
  return (
    <div className="App">
      <HomePage />
      <InvestmentPartners />
      <ImpactByNumbers />
      <DiscoverMore />
      <HoverCardSlider />
      <ChairmanMessage />
      <Footer />
    </div>
  );
}

export default App;
