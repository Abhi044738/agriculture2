import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./compnent/Header/header";
import { Footer } from "./compnent/footer/footer";
import { Home } from "./pages/Home/home";
import { FAQS } from "./pages/botpage/bot";
import { Recomendation } from "./pages/recomendation/recomendPage";

function App() {
  return (
    <div className="App">
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FAQS" element={<FAQS />} />
          <Route path="/recomendation" element={<Recomendation />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
