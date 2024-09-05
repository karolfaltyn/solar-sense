import { Header } from "../parts/Header";
import { LogInForm } from "../parts/LogInForm";
import img_bg from "/assets/images/pv-bg.jpg";

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="flex w-full flex-col items-center justify-center bg-cover bg-center sm:h-[80vh]"
        style={{ backgroundImage: `url(${img_bg})` }}
      >
        <div className="container flex flex-col items-center justify-around md:flex-row">
          <Header />
          <LogInForm />
        </div>
      </div>
    </div>
  );
};
