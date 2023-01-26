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
        Born in the UK, degree in Scandinavia, picked up some languages along
        the way (native English, proficient in Danish and Swedish, intermediate
        German).
      </p>
      <p className="text-white px-4 mx-auto mt-2 w-75">
        Currently working as a Junior Software Engineer at Aurora Energy
        Research in Oxford, UK.
      </p>
      <p className="text-white px-4 mx-auto mt-2 w-75">
        Outside of coding and gushing over obscure npm packages you can find me
        dabbling in audio production or trying to learn Mandarin
      </p>
    </div>
  );
};

export default AboutMeSection;
