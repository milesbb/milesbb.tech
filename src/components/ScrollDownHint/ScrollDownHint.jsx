import { useEffect, useState } from "react";
import { ChevronDown } from "react-bootstrap-icons";
import "./ScrollDownHint.css";

const ScrollDownHint = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`scroll-hint-fixed ${visible ? "visible" : "hidden"}`}>
      <div className="scroll-hint text-center">
        <ChevronDown size={40} className="text-dark" />
      </div>
    </div>
  );
};

export default ScrollDownHint;
