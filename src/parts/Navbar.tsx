import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-grayBg text-white">
      <div className="container">
        <Link to="/">
          <p className="bg-red-300 p-4 font-medium uppercase tracking-widest">
            Solar Sense
          </p>
        </Link>
      </div>
    </nav>
  );
};
