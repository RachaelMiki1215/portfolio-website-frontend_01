"use client";

import { useEffect, useState } from "react";

const TimeBasedGreeting: React.FC = () => {
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    const now: Date = new Date();

    if (now.getHours() >= 4 && now.getHours() < 12) {
      setGreeting("Good morning");
    } else if (now.getHours() >= 12 && now.getHours() < 17) {
      setGreeting("Good afternoon");
    } else if (now.getHours() >= 17 && now.getHours() < 20) {
      setGreeting("Good evening");
    } else {
      setGreeting("Hey there");
    }
  }, []);

  return <>{greeting}</>;
};

export default TimeBasedGreeting;
