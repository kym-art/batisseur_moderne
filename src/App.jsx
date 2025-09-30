import { Routes, Route } from "react-router-dom";
import First from "./pages/first";
import Realisation from "./pages/html/realisation";
import Propos from "./pages/html/propos";
import Service from "./pages/html/service";

function App() {
  return (
    <Routes>
      <Route path="/" element={<First />} />
      <Route path="/p" element={<Propos />} />
      <Route path="/r" element={<Realisation />} />
      <Route path="/s" element={<Service />} />
    </Routes>
  );
}
export default App;
