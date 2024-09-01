import { Navbar } from "./parts/Navbar";
import { Footer } from "./parts/Footer";

import { LogIn } from "./pages/LogIn";
import { Production } from "./pages/Production";

export const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <LogIn />
        {/* <Production /> */}
      </main>
      <Footer />
    </>
  );
};
