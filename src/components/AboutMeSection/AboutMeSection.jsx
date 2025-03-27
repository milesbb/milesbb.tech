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
        From the UK, did degree in Prosthetics in Scandinavia, picked up some
        languages along the way (native English, proficient in Danish and
        Swedish, intermediate German).
      </p>
      <p className="text-white px-4 mx-auto mt-2 w-75">
        Currently working as a Software Engineer at Aurora Energy Research in
        Oxford, UK.
      </p>
      <p className="text-white px-4 mx-auto mt-2 w-75">
        Outside of trying to learn Mandarin and Portuguese, you can find me
        fiddling with whatever mechatronics project I've been working on
        recently.
      </p>
    </div>
  );
};

export default AboutMeSection;
