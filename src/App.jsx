import { Route, Routes } from "react-router";
import { MainLayout } from "./pages/MainLayout";
import { Home } from "./pages/Home";
import { AboutPage } from "./pages/AboutPage";
import { DestinationsPage } from "./pages/DestinationsPage";
import { ContactPage } from "./pages/ContactPage";
import { DetailsPage } from "./pages/DetailsPage";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="destinations" element={<DestinationsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="/destinations/:slug" element={<DetailsPage />} />
          {/* <Route path="destinations/:cityName" element={<DetailsPage />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
