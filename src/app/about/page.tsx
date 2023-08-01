import Image from "next/image";

import Styles from "./about.module.scss";

import profileImg01 from "@/../public/img/RachaelBuxton_ProfilePic_01.png";
import profileImg02 from "@/../public/img/RachaelBuxton_ProfilePic_02.jpg";
import profileImg03 from "@/../public/img/RachaelBuxton_ProfilePic_03.jpg";
import { Metadata } from "next";
import TimeBasedGreeting from "@/components/strings/greetings";
import { InlineLink } from "@/components/inline-elements/Links";
import Carousel from "@/components/container/Carousel";
import CaptionPopupImage from "@/components/images/CaptionPopupImage";
import { getHobbies } from "@/data/FetchFromMyDb";

type Hobby = {
  name: string;
  description: string;
};

const imageArr: { image: React.ReactNode }[] = [
  {
    image: (
      <CaptionPopupImage
        src={profileImg01}
        caption="My latest portrait on LinkedIn"
        imgClassName={Styles.profileImg}
      />
    ),
  },
  {
    image: (
      <CaptionPopupImage
        src={profileImg02}
        caption="A random side profile"
        imgClassName={Styles.profileImg}
        imgStyle={{ filter: "contrast(1.2)" }}
      />
    ),
  },
  {
    image: (
      <CaptionPopupImage
        src={profileImg03}
        caption="Spoiling my sugar-deprived self"
        imgClassName={Styles.profileImg}
        imgStyle={{ filter: "contrast(1.3)" }}
      />
    ),
  },
];

export const metadata: Metadata = {
  title: "Rachael Miki Buxton | Portfolio Website | About Author",
  description: "A quick summary about the author/owner of this website.",
};

const HobbySection = ({ hobbies }: { hobbies: any }) => {
  return (
    <>
      <dt>Hobbies</dt>
      <dd>
        <ul>
          {Array.isArray(hobbies) ? (
            hobbies.map((hobby: Hobby) => {
              return <li key={Math.random().toString()}>{hobby.name}</li>;
            })
          ) : (
            <li key={Math.random().toString()}>{hobbies.name}</li>
          )}
        </ul>
      </dd>
    </>
  );
};

export default async function About() {
  const hobbies = await getHobbies();

  return (
    <main className={Styles.main}>
      <Carousel containerClassName={Styles.descriptionCarousel}>
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
            {hobbies && <HobbySection hobbies={hobbies} />}
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
              </ul>
            </dd>
          </dl>
        </div>
      </Carousel>
      <div className={Styles.imgDiv}>
        {imageArr[Math.floor(Math.random() * imageArr.length)].image}
      </div>
    </main>
  );
}
