import React, { useEffect, useState } from "react";

const TypingText = () => {
  const fullText =
    "Therapy is a journey of self-discovery and healing.It helps individuals understand their thoughts, emotions, and behaviors in a supportive environment.";
  const words = fullText.split(" ");

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => (prev + " " + words[index]).trim());
        setIndex((prev) => prev + 1);
      }, 200); // typing speed per word
      return () => clearTimeout(timeout);
    }
  }, [index, words]);

  return (
    <p className="text-xl md:text-2xl font-semibold text-white max-w-2xl">
      {displayedText}
      <span className="animate-pulse">|</span>
    </p>
  );
};

export default TypingText;
