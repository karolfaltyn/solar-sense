export const Header = () => {
  return (
    <header className="flex flex-col">
      <h1 className="py-4 text-5xl font-medium text-darkGray">Solar Sense</h1>
      <p className="xs:w-[35ch] text-wrap- font-medium text-gray sm:w-[40ch] lg:w-[60ch]">
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
    </header>
  );
};
