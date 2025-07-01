import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TypingEffect = () => {
  const roles = [
    "Full Stack Developer",
    "MERN Stack Enthusiast",
  ];
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && forward) {
      setTimeout(() => setForward(false), 1000);
    } else if (subIndex === 0 && !forward) {
      setForward(true);
      setIndex((prev) => (prev + 1) % roles.length);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (forward ? 1 : -1));
    }, forward ? 100 : 50);

    setDisplayedText(roles[index].substring(0, subIndex));
    return () => clearTimeout(timeout);
  }, [subIndex, index, forward]);

  return (
    <motion.h2
      className="text-blue-600 font-[600] xs360:text-[1rem] xs400:text-[1.3rem] xl:text-[1.6rem]"
      style={{ textShadow: "0 0 30px #e950d2", whiteSpace: "pre" }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </motion.h2>
  );
};

export default TypingEffect;