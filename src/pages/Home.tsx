import { Header } from "../parts/Header";
import { LogInForm } from "../parts/LogInForm";

export const Home = () => {
  return (
    <div className="container flex items-center justify-around flex-col md:flex-row">
      <Header />
      <LogInForm />
    </div>
  );
};
