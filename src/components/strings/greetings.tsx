"use client"

import { useEffect, useState } from "react";

export default function TimeBasedGreeting() {
    const [greeting, setGreeting] = useState("Hello");
    
    useEffect(() => {
        let now = new Date();
    
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
}