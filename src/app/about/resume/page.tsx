// TODO: Complete this page

import { profilePicArr } from "@/other/ProfilePic";
import Container from "@/components/container/Container";
import Styles from "./Resume.module.scss";
import ResumeGrid from "./resumeGrid";
import { Metadata } from "next";
import {
  getCertifications,
  getEducation,
  getHobbies,
  getSkills,
} from "@/data/FetchFromMyDb";
import Image from "next/image";
import SlidingDropDown from "@/components/container/DropDown";
import { EducationType, HobbyType, SkillType } from "@/types/MyDbTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocation,
  faMapLocationDot,
  faMapMarked,
  faMapMarker,
  faMapPin,
  faMarker,
  faSchool,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";

const sortBySkillLevel = (a: SkillType, b: SkillType): number => {
  if (a.proficiency > b.proficiency) return 1;
  if (a.proficiency < b.proficiency) return -1;
  return 0;
};

const ProfilePic: React.FC = () => {
  const picObj =
    profilePicArr[Math.floor(Math.random() * profilePicArr.length)];

  return (
    <Image
      src={picObj.image}
      alt={picObj.caption}
      style={picObj.style}
      className={Styles.profilePic}
    />
  );
};

export const metadata: Metadata = {
  title: "Rachael Miki Buxton | Portfolio Website | Resume",
  description: "Author's resume.",
};

export default async function Resume() {
  const education = await getEducation();
  const certifications = await getCertifications();
  const hobbies = await getHobbies();
  const skills = await getSkills();

  const skillCategories = [
    ...new Set(skills.map((skill: SkillType) => skill.category)),
  ];

  return (
    <ResumeGrid>
      <div className={Styles.leftColumn}>
        <Container className={Styles.nameSection}>
          <ProfilePic />
          <h1 className={Styles.name}>Rachael Miki Buxton</h1>
        </Container>
        {education && (
          <Container className={Styles.educationSection}>
            <h1>Education</h1>
            {education.map((edu: EducationType) => {
              return (
                <div className={Styles.educationItem}>
                  <div
                    className={Styles.degreeMajor}
                  >{`${edu.degree} in ${edu.major}`}</div>
                  <div className={Styles.institute}>
                    <FontAwesomeIcon icon={faUniversity} />
                    <span className={Styles.text}>{edu.institute}</span>
                  </div>
                  <div className={Styles.location}>
                    <FontAwesomeIcon icon={faMapMarker} />
                    <span className={Styles.text}>{edu.instituteCity}</span>
                  </div>
                </div>
              );
            })}
          </Container>
        )}
        {certifications && (
          <Container className={Styles.certificationSection}>
            <h1>Certifications</h1>
            {/* TODO: Add more to section when I actually have certifications :) */}
          </Container>
        )}
        {hobbies && (
          <Container className={Styles.hobbySection}>
            <h1>Hobbies</h1>
            <ul className={Styles.hobbyList}>
              {hobbies.map((hobby: HobbyType) => {
                return <li>{hobby.name}</li>;
              })}
            </ul>
          </Container>
        )}
      </div>
      <div className={Styles.middleColumn}>
        <Container className={Styles.projectSection}>
          <h1>Projects</h1>
        </Container>
        <Container className={Styles.workExperienceSection}>
          <h1>Work Experience</h1>
        </Container>
      </div>
      <Container className={Styles.skillSection}>
        <h1>Skills</h1>
        {skillCategories.map((category: any) => {
          return (
            <SlidingDropDown
              dropdownComponent={
                <ul>
                  {skills
                    .filter((skill: SkillType) => skill.category === category)
                    .sort(sortBySkillLevel)
                    .map((skill: SkillType) => (
                      <li>{skill.name}</li>
                    ))}
                </ul>
              }
              headerComponent={
                <div className={Styles.skillCategoryHeader}>{category}</div>
              }
              isOpenOnDefault={false}
              changeOnClick={true}
            />
          );
        })}
      </Container>
    </ResumeGrid>
  );
}
