const AboutMeSection = () => {
  return (
    <div
      style={{
        width: "100vw",
        background: "#48276dff",
        boxShadow: "1px 7px 15px 7px rgba(0,0,0,0.3)",
      }}
      className="py-5 mb-2"
      id="about"
    >
      <h2 className="text-white mb-4 text-center">ABOUT ME</h2>

      <ul
        className="text-white px-4 mx-auto mt-2 w-75"
        style={{
          listStyleType: "none",
          textAlign: "center",
        }}
      >
        <li className="mb-3">
          <img
            src="https://emojicdn.elk.sh/💼"
            alt="party"
            style={{ height: "1em", verticalAlign: "middle" }}
          />{" "}
          Been working as a Software Engineer in Oxford, UK for the past 3 years
          at a renewable energy fintech.
        </li>

        <li className="mb-3">
          <img
            src="https://emojicdn.elk.sh/🛠️"
            alt="party"
            style={{ height: "1em", verticalAlign: "middle" }}
          />{" "}
          Initially full stack and then focused into backend (both across cloud
          based dev-owned architecture and refactoring legacy code in
          statistical financial models) but can still work comfortably
          full-stack.
        </li>

        <li className="mb-3">
          <img
            src="https://emojicdn.elk.sh/💪"
            alt="party"
            style={{ height: "1em", verticalAlign: "middle" }}
          />{" "}
          Lead a team for the last year and a half and experience line-managing
          and interviewing.
        </li>

        <li className="mb-3">
          <img
            src="https://emojicdn.elk.sh/🗣️"
            alt="party"
            style={{ height: "1em", verticalAlign: "middle" }}
          />{" "}
          Can speak English, Danish and Swedish, can understand German (speaking
          is somewhat rusty but can get by), and my Mandarin is laughable but
          working towards HSK1. From the UK with a Danish background.
        </li>

        <li className="mb-3">
          <img
            src="https://emojicdn.elk.sh/🎓"
            alt="party"
            style={{ height: "1em", verticalAlign: "middle" }}
          />{" "}
          Did my degree in Prosthetics and Orthotics in Sweden and learnt
          Swedish so I could understand all of the jokes about Denmark.
        </li>

        <li className="mb-3">
          <img
            src="https://emojicdn.elk.sh/🏋"
            alt="party"
            style={{ height: "1em", verticalAlign: "middle" }}
          />{" "}
          Outside of trying to learn Mandarin, you can find me trying to hit my
          next Olympic Lifting PB or fiddling with whatever mechatronics project
          I've been working on recently.
        </li>
      </ul>
    </div>
  );
};

export default AboutMeSection;
