import { HashRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./parts/Navbar";
import { Footer } from "./parts/Footer";
import { Home } from "./pages/Home";
import { Production } from "./pages/Production";

export const App = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <HashRouter>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route index element={<Home />} />
            <Route path="production" element={<Production />} />
            {/* <Route path="*" element={<ErrorPage />} /> */}
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </div>
  );
};
