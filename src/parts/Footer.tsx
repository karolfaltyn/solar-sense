export const Footer = () => {
  return (
    <footer className="inset-x-0 bottom-0 bg-grayBg">
      <div className="container flex justify-between p-4">
        <p className="text-white">FLAGA</p>
        <div className="flex gap-2 text-white">
          <a
            href="https://karolfaltyn.github.io"
            target="_blank"
            className="flex gap-2"
          >
            <p className="font-light tracking-wider">Autor</p>
            <p className="">|</p>
            <p className="tracking-wider">KF</p>
          </a>
        </div>
      </div>
    </footer>
  );
};
