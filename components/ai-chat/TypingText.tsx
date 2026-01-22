"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number;
};

export default function TypingText({ text, speed = 18 }: Props) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      setDisplayedText(prev => prev + text.charAt(index));
      index++;

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayedText}</span>;
}
