import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import BasePage from "./Pages/BasePage/BasePage";
import NewVideo from "./Pages/NewVideo/NewVideo";
import NotFound from "./Pages/NotFound/NotFound";
import EditModal from "./Pages/EditModal/EditModal"; // Asegúrate de importar el componente EditModal

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Home />} />
          <Route path="/new-video" element={<NewVideo />} />
          <Route path="/edit/:id" element={<EditModal />} /> {/* Ruta para editar un video */}
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;