export const Header = () => {
  return (
    <div className="flex flex-col rounded-md p-4 backdrop-blur-sm">
      <header>
        <h1 className="py-4 text-center text-5xl font-medium text-darkGray md:text-left">
          Solar Sense
        </h1>
      </header>
      <p className="text-wrap font-medium text-white xs:w-[35ch] sm:w-[40ch] lg:w-[60ch]">
        Monitor your SolaX PV system. <br /> To enter, you need two parameters
        TokenID and SN, which you can find{" "}
        <a
          className="text-darkBlue underline"
          href="https://www.eu.solaxcloud.com/phoebus/resource/files/userGuide/Solax_API_for_End-user_V1.0.pdf"
          target="_blank"
        >
          here.
        </a>{" "}
        <br /> <br />
        For testing purposes, I also created a demo version that does not
        require any data - here.
      </p>
    </div>
  );
};
