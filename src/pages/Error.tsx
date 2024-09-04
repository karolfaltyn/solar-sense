import { Link } from "react-router-dom";
import { Button } from "../components/Button";

export const Error = () => {
  return (
    <div className="container mt-32 flex flex-col items-center justify-center text-center">
      <h1 className="py-4 text-5xl font-medium text-darkGray">Oops!</h1>
      <p className="text-2xl text-gray">Page not found</p>
      <Link to="/">
        <p className="w-64 p-4 font-medium uppercase tracking-widest">
          <Button content="Let's go back." variant="primary" />
        </p>
      </Link>
    </div>
  );
};
