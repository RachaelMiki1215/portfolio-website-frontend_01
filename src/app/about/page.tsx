import Image from "next/image";

import Styles from "./about.module.scss";

import profileImg from "../../../public/img/B612_20230310_194235_341.jpg";
import { Metadata } from "next";
import TimeBasedGreeting from "@/components/strings/greetings";
import { InlineLink } from "@/components/inline-elements/Links";
import Carousel from "@/components/container/Carousel";

export const metadata: Metadata = {
  title: "Rachael Miki Buxton | Portfolio Website | About Author",
  description: "A quick summary about the author/owner of this website.",
};

export default function About() {
  return (
    <main className={Styles.main}>
      <Carousel
        containerClassName={Styles.descriptionCarousel}
      >
        <div className={Styles.intro}>
          <p>
            <TimeBasedGreeting />, this is <strong>Rachael Miki Buxton</strong>.
            I am a System Engineer learning web development.
          </p>
          <p>
            I have made this website to showcase my work. As I have a lot of
            interests, I&apos;ll sometimes be posting about topics other than
            web development, e.g. native application development or game
            development.
          </p>
          <p>
            Thanks, and <InlineLink href="/contact">contact me</InlineLink> if
            you have any comments or questions!
          </p>
        </div>
        <div className={Styles.moreInfo}>
          <p>Some more info about me...</p>
          <dl>
            <dt>MBTI Type</dt>
            <dd>INTJ / ISTJ</dd>
            <dt>Hobbies</dt>
            <dd>
              <ul>
                <li>Spending time with my dog🐶</li>
                <li>Coding / Programming👩‍💻</li>
                <li>Gaming🎮</li>
              </ul>
            </dd>
            <dt>Likes</dt>
            <dd>
              <ul>
                <li>Dogs🐕</li>
                <li>Boba Tea🥤</li>
              </ul>
            </dd>
            <dt>Dislikes</dt>
            <dd>
              <ul>
                <li>Long meetings⌚</li>
                <li>Verboseness📝</li>
              </ul>
            </dd>
          </dl>
        </div>
      </Carousel>
      <div className={Styles.imgDiv}>
        <Image
          src={profileImg}
          alt="25% sugar, no ice and double boba"
          className={Styles.profileImg}
        />
      </div>
    </main>
  );
}
