import { Navbar } from "./parts/Navbar";
import { Footer } from "./parts/Footer";
import { Home } from "./pages/Home";
import { Production } from "./pages/Production";

export const App = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <Home />
        <Production />
      </main>
      <Footer />
    </div>
  );
};
