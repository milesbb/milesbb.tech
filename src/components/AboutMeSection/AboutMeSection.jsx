const AboutMeSection = () => {
  return (
    <div
      style={{
        width: "100vw",
        background: "#39A9DB",
      }}
      className="py-5 mb-2"
    >
      <h2 className="text-white mb-4">ABOUT ME</h2>
      <p className="text-white px-4 mx-auto mt-2 w-75">
        Born in the UK, degree in Scandinavia, picked up some languages along
        the way (proficient in Danish, Swedish, intermediate German).
      </p>
      <p className="text-white px-4 mx-auto mt-2 w-75">
        Now studying full-stack software engineering at EPICODE (formerly Strive
        School) expecting to graduate in December 2022.
      </p>
      <p className="text-white px-4 mx-auto mt-2 w-75">
        Outside of coding and gushing over obscure npm packages you can find me
        dabbling in audio production or trying to learn Mandarin
      </p>
    </div>
  );
};

export default AboutMeSection;
