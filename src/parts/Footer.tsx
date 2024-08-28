export const Footer = () => {
  return (
    <div className="absolute inset-x-0 bottom-0 bg-darkGray">
      <nav className="container flex justify-between p-8">
        <p className="text-white">FLAGA</p>
        <div className="flex gap-2 text-white">
          <p className="tracking-wider">SolaX Cloud</p>
          <p className="">|</p>
          <p className="font-light tracking-wider">Autor</p>
        </div>
      </nav>
    </div>
  );
};
