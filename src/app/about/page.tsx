import Styles from "./about.module.scss";

import { profilePicArr, profilePicType } from "@/other/ProfilePic";
import { Metadata } from "next";
import TimeBasedGreeting from "@/components/strings/greetings";
import { InlineLink } from "@/components/inline-elements/Links";
import Carousel from "@/components/container/Carousel";
import CaptionPopupImage from "@/components/images/CaptionPopupImage";
import { getHobbiesDynamic } from "@/data/FetchFromMyDb";
import { HobbyType } from "@/types/MyDbTypes";

const HobbySection: React.FC<{ hobbies: HobbyType[] }> = ({
  hobbies,
}: {
  hobbies: HobbyType[];
}) => {
  return (
    <>
      <dt>Hobbies</dt>
      <dd>
        <ul>
          {hobbies.map((hobby: HobbyType) => {
            return (
              <li key={Math.random().toString()}>
                {/* <HoverText popupText={hobby.description}>
                    {hobby.name}
                  </HoverText> */}
                {/* TODO: Eventually use HoverText component for this once component code is fixed. */}
                {hobby.name}
              </li>
            );
          })}
        </ul>
      </dd>
    </>
  );
};

const IntroParagraphs: React.FC = () => {
  return (
    <div className={Styles.intro}>
      <p>
        <TimeBasedGreeting />, this is <strong>Rachael Miki Buxton</strong>. I
        am a System Engineer learning <strong>web development</strong>.
      </p>
      <p>
        I&apos;ve created this website to showcase my work. As I&apos;m
        scatter-brained, I&apos;ll sometimes be posting about topics other than
        web development (e.g. native application development or game
        development).
      </p>
      <p>
        Thanks, and{" "}
        <InlineLink href="/contact" isInternal={true}>
          contact me
        </InlineLink>{" "}
        if you have any comments or questions!
      </p>
    </div>
  );
};

const AdditionalInfo: React.FC<{ hobbies: HobbyType[] }> = ({
  hobbies,
}: {
  hobbies: HobbyType[];
}) => {
  return (
    <div className={Styles.moreInfo}>
      <p>More info about me...</p>
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
  );
};

const ProfilePic: React.FC = () => {
  const pic: profilePicType =
    profilePicArr[Math.floor(Math.random() * profilePicArr.length)];

  return (
    <div className={Styles.imgDiv}>
      <CaptionPopupImage
        src={pic.image}
        caption={pic.caption}
        imgClassName={Styles.profileImg}
        imgStyle={pic.style}
      />
    </div>
  );
};

export const metadata: Metadata = {
  title: "Rachael Miki Buxton | Portfolio Website | About Author",
  description: "A quick summary about the author/owner of this website.",
};

export default async function About() {
  const hobbies = await getHobbiesDynamic();

  return (
    <main className={Styles.main}>
      <Carousel containerClassName={Styles.descriptionCarousel}>
        <IntroParagraphs />
        <AdditionalInfo hobbies={hobbies} />
      </Carousel>
      {/* TODO: Revise carousel to make height adaptive to contents inside */}
      <ProfilePic />
    </main>
  );
}
