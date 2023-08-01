// TODO: Complete this page

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

export const metadata: Metadata = {
  title: "Rachael Miki Buxton | Portfolio Website | Resume",
  description: "Author's resume.",
};

export default async function Resume() {
  const education = await getEducation();
  const certifications = await getCertifications();
  const hobbies = await getHobbies();
  const skills = await getSkills();

  return (
    <ResumeGrid>
      <Container className={Styles.nameSection}></Container>
      <Container className={Styles.educationSection}>
        <h1>Education</h1>
        {/* {education.map((edu: any) => {
          return <div>{edu}</div>;
        })} */}
      </Container>
      <Container className={Styles.certificationSection}>
        <h1>Certifications</h1>
      </Container>
      <Container className={Styles.hobbySection}>
        <h1>Hobbies</h1>
        {/* {hobbies.map((hobby: any) => {
          return <div>{hobby}</div>;
        })} */}
      </Container>
      <Container className={Styles.projectSection}>
        <h1>Projects</h1>
      </Container>
      <Container className={Styles.workExperienceSection}>
        <h1>Work Experience</h1>
      </Container>
      <Container className={Styles.skillSection}>
        <h1>Skills</h1>
        {/* {skills.map((skill: any) => {
          return <div>{skill.id}</div>;
        })} */}
      </Container>
    </ResumeGrid>
  );
}
