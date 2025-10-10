const AboutMeSection = () => {
  return (
    <div
      style={{
        width: "100vw",
        background: "#39A9DB",
        boxShadow: "1px 7px 15px 7px rgba(0,0,0,0.3)",
      }}
      className="py-5 mb-2"
      id="about"
    >
      <h2 className="text-white mb-4">ABOUT ME</h2>
      <p className="text-white px-4 mx-auto mt-2 w-75">
        Been working as a Software Engineer in Oxford, UK for the past 3 years at a renewable energy fintech. Initially full stack and then focused into backend (both across cloud based dev-owned architecture and refactoring legacy code in statistical models) but can work comfortably in both. Lead a team for the last year and a half and experience line-managing and interviewing.
      </p>
      <p className="text-white px-4 mx-auto mt-2 w-75">
        From the UK though with a Danish background. Did my degree in Prosthetics and Orthotics in Sweden and learnt Swedish so I could understand all of the jokes about Denmark. Can speak English, Danish and
        Swedish, can understand German (speaking is somewhat rusty but can get by), and my mandarin is laughable but working towards HK1.
      </p>
      <p className="text-white px-4 mx-auto mt-2 w-75">
        Outside of trying to learn Mandarin, you can find me trying to hit my next Olympic Lifting PB or
        fiddling with whatever mechatronics project I've been working on
        recently.
      </p>
    </div>
  );
};

export default AboutMeSection;
