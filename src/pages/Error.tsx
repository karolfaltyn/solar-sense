import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import img_bg from "../../public/assets/images/owl-bg.jpg";

export const Error = () => {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center">
      <div
        className="flex h-[100%] w-full flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${img_bg})` }}
      >
        <h1 className="py-4 text-5xl font-medium text-darkGray">Oops!</h1>
        <p className="text-2xl font-semibold text-white">Page not found</p>
        <Link to="/">
          <p className="w-64 p-4 font-medium uppercase tracking-widest">
            <Button content="Let's go back." variant="primary" />
          </p>
        </Link>
      </div>
    </div>
  );
};
