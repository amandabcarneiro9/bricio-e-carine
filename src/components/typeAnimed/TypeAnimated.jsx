import React, { useState, useEffect } from "react";

export default function TypeAnimated({ text, timeToComplete }) {
  const [displayingText, setDisplayingText] = useState("");
  const eachCharacterInterval = Math.round(timeToComplete / text.length);

  useEffect(() => {
    const nextInterval = displayingText === text ? 2000 : eachCharacterInterval;
    const typingTimeout = setTimeout(() => {
      if (displayingText.length < text.length) {
        setDisplayingText(text.slice(0, displayingText.length + 1));
      } else {
        setDisplayingText("");
      }
    }, nextInterval);

    return () => clearTimeout(typingTimeout);
  }, [text, displayingText, eachCharacterInterval]);

  return <span className="type-animated">{displayingText}</span>;
}
