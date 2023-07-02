"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import Styles from "./about.module.scss";

import profileImg from "../../../public/img/B612_20230310_194235_341.jpg";

export default function About() {
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

  return (
    <main className={Styles.main}>
      <div className={Styles.intro}>
        <p>
          {greeting}, this is <strong>Rachael Miki Buxton</strong>. I am a
          System Engineer learning web development.
        </p>
        <p>
          I have made this website to showcase my work. As I have a lot of
          interests, I&apos;ll sometimes be posting about topics other than web
          development, e.g. native application development or game development.
        </p>
        <p>Thanks, and contact me if you have any comments or questions!</p>
      </div>
      <div className={Styles.imgDiv}>
        <Image
          src={profileImg}
          alt="Hello there."
          className={Styles.profileImg}
        />
      </div>
    </main>
  );
}
