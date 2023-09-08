import Styles from "./about.module.scss";

import { profilePicArr } from "@/other/ProfilePic";
import { Metadata } from "next";
import TimeBasedGreeting from "@/components/strings/greetings";
import { InlineLink } from "@/components/inline-elements/Links";
import Carousel from "@/components/container/Carousel";
import CaptionPopupImage from "@/components/images/CaptionPopupImage";
import { getHobbies } from "@/data/FetchFromMyDb";

// TODO: Eventually, optimize this by first choosing random item out of array and then forming component
const profPicArr: React.ReactNode[] = profilePicArr.map((prof) => (
  <CaptionPopupImage
    src={prof.image}
    caption={prof.caption}
    imgClassName={Styles.profileImg}
    imgStyle={prof.style}
  />
));

type Hobby = {
  name: string;
  description: string;
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

export const metadata: Metadata = {
  title: "Rachael Miki Buxton | Portfolio Website | About Author",
  description: "A quick summary about the author/owner of this website.",
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
        {profPicArr[Math.floor(Math.random() * profPicArr.length)]}
      </div>
    </main>
  );
}
