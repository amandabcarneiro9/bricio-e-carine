import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./sessions/main/Main";
import Presentes from "./sessions/presentes/Presentes";
import Gallery from "./sessions/gallery/Gallery";
import Map from "./sessions/map/Map";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/presentes" element={<Presentes />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/mapa" element={<Map />} />
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Footer />
    </main>
  );
}
export default App;
