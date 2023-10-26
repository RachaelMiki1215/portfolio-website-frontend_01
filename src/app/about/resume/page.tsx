// TODO: Complete this page

import { profilePicArr } from "@/other/ProfilePic";
import Container from "@/components/container/Container";
import Styles from "./Resume.module.scss";
import ResumeGrid from "./resumeGrid";
import { Metadata } from "next";
import {
  getCertifications,
  getEducation,
  getHobbiesDynamic,
  getSkillsDynamic,
  getWorkExperienceDynamic,
  getProjectsDynamic,
} from "@/data/FetchFromMyDb";
import Image from "next/image";
import SlidingDropDown from "@/components/container/DropDown";
import {
  CertificationType,
  EducationType,
  HobbyType,
  SkillType,
} from "@/types/MyDbTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faUniversity } from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "@/functions/DateFunctions";
import { type } from "os";
import { promises } from "dns";
import React from "react";

const sortBySkillLevel = (a: SkillType, b: SkillType): number => {
  if (a.proficiency > b.proficiency) return 1;
  if (a.proficiency < b.proficiency) return -1;
  return 0;
};

const getSkillLevelText = (skill: SkillType): string => {
  if (skill.proficiency === 1) return "beginner";
  if (skill.proficiency === 2) return "pre-intermediate";
  if (skill.proficiency === 3) return "intermediate";
  if (skill.proficiency === 4) return "proficient";
  if (skill.proficiency === 5) {
    if (skill.category === "Language") return "fluent";
    return "advanced";
  }
  return "";
};

// const ProfilePic: React.FC = () => {
//   const picObj =
//     profilePicArr[Math.floor(Math.random() * profilePicArr.length)];

//   return (
//     <Image
//       src={picObj.image}
//       alt={picObj.caption}
//       style={picObj.style}
//       className={Styles.profilePic}
//     />
//   );
// };

export const metadata: Metadata = {
  title: "Rachael Miki Buxton | Portfolio Website | Resume",
  description: "Author's (Rachael Miki Buxton's) resume.",
};

const NameSection: React.FC = () => {
  return (
    <Container className={Styles.nameSection}>
      {/* Removing ProfilePic component for now because I no longer like it. */}
      {/* <ProfilePic /> */}
      <h1 className={Styles.name}>Rachael Miki Buxton</h1>
    </Container>
  );
};

const TitleSection: React.FC = () => {
  return (
    <Container className={Styles.titleSection}>
      <h6 className={Styles.title}>Software Systems Engineer</h6>
    </Container>
  );
};

const EducationSection: React.FC = async () => {
  const educations = await getEducation();

  if (educations) {
    return (
      <Container className={Styles.educationSection}>
        <h1>Education</h1>
        <ul className={Styles.educationList}>
          {educations.map((edu: EducationType) => {
            return (
              <li
                className={Styles.educationItem}
                key={Math.random().toString()}
              >
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
              </li>
            );
          })}
        </ul>
      </Container>
    );
  }

  return null;
};

const CertificationSection: React.FC = async () => {
  const certifications = await getCertifications();

  if (certifications) {
    return (
      <Container className={Styles.certificationSection}>
        <h1>Certifications</h1>
        {/* TODO: Add more to section when I actually have certifications :) */}
      </Container>
    );
  }

  return null;
};

const HobbySection: React.FC = async () => {
  const hobbies = await getHobbiesDynamic();

  if (hobbies) {
    return (
      <Container className={Styles.hobbySection}>
        <h1>Hobbies</h1>
        <ul className={Styles.hobbyList}>
          {hobbies.map((hobby: HobbyType) => {
            return <li key={Math.random().toString()}>{hobby.name}</li>;
          })}
        </ul>
      </Container>
    );
  }

  return null;
};

// TODO: Finish this component
const ProjectSection: React.FC = async () => {
  const projects = await getProjectsDynamic();

  if (projects) {
    return (
      <Container className={Styles.projectSection}>
        <h1>Projects</h1>
        <ul className={Styles.projectList}>
          {projects
            .filter((p) => p.putOnResume)
            .sort(
              (a, b) =>
                Date.parse(a.publishedDate) - Date.parse(b.publishedDate)
            )
            .slice(-5)
            .map((project) => {
              return (
                <li
                  key={Math.random().toString()}
                  className={Styles.projectItem}
                >
                  <SlidingDropDown
                    headerComponent={
                      <div className={Styles.projectHeader}>
                        <span className={Styles.projectTitle}>
                          {project.title}
                        </span>
                        <span className={Styles.projectDate}>
                          {formatDate(project.publishedDate)}
                        </span>
                        {project.keywords.length > 0 && (
                          <ul className={Styles.projectKeywords}>
                            {project.keywords.map((keyword) => {
                              return (
                                <li
                                  key={Math.random().toString()}
                                  className={Styles.projectKeyword}
                                >
                                  {keyword}
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    }
                    dropdownComponent={
                      <div className={Styles.projectDropdown}>
                        {project.summary && <div>{project.summary}</div>}
                      </div>
                    }
                    isOpenOnDefault={false}
                    changeOnClick={true}
                  />
                </li>
              );
            })}
        </ul>
      </Container>
    );
  }

  return null;
};

const WorkExperienceSection: React.FC = async () => {
  const workExperience = await getWorkExperienceDynamic();

  if (workExperience) {
    return (
      <Container className={Styles.workExperienceSection}>
        <h1>Work Experience</h1>
        <ul className={Styles.workExperienceList}>
          {workExperience
            .sort((a, b) => Date.parse(a.startDate) - Date.parse(b.startDate))
            .slice(-5)
            .map((work) => {
              return (
                <li
                  key={Math.random().toString()}
                  className={Styles.workExperienceItem}
                >
                  <SlidingDropDown
                    dropdownComponent={
                      <div className={Styles.workExperienceDropdown}>
                        <div>{work.shortDescription}</div>
                        {work.responsibilities && (
                          <>
                            <h5>Responsibilities</h5>
                            <ul>
                              {work.responsibilities.map((resp: string) => (
                                <li
                                  dangerouslySetInnerHTML={{ __html: resp }}
                                />
                              ))}
                            </ul>
                          </>
                        )}
                        {work.accomplishments && (
                          <>
                            <h5>Accomplishments</h5>
                            <ul>
                              {work.accomplishments.map((acc: string) => (
                                <li dangerouslySetInnerHTML={{ __html: acc }} />
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    }
                    headerComponent={
                      <div className={Styles.workExperienceHeader}>
                        <span className={Styles.workExperinceName}>
                          {work.position} | {work.company}
                        </span>
                        <span className={Styles.workExperiencePeriod}>
                          {formatDate(work.startDate)} ~{" "}
                          {work.endDate ? formatDate(work.endDate) : "Present"}
                        </span>
                      </div>
                    }
                    changeOnClick={true}
                    isOpenOnDefault={false}
                  />
                </li>
              );
            })}
        </ul>
      </Container>
    );
  }

  return null;
};

const SkillSection: React.FC = async () => {
  const skills = await getSkillsDynamic();

  if (skills) {
    const skillCategories = [
      ...new Set(skills.map((skill: SkillType) => skill.category)),
    ];

    return (
      <Container className={Styles.skillSection}>
        <h1>Skills</h1>
        {skillCategories.map((category: any) => {
          return (
            <SlidingDropDown
              dropdownComponent={
                <ul className={Styles.skillDropdownContent}>
                  {skills
                    .filter((skill: SkillType) => skill.category === category)
                    .sort(sortBySkillLevel)
                    .map((skill: SkillType) => (
                      <li className={Styles.skillItem}>
                        <span
                          className={Styles.skillBar}
                          style={{
                            width: `${(skill.proficiency / 5) * 100}%`,
                            opacity: `${skill.proficiency / 10}`,
                          }}
                        ></span>
                        <span className={Styles.skillText}>{skill.name}</span>
                        <span className={Styles.skillLevelText}>
                          {getSkillLevelText(skill)}
                        </span>
                      </li>
                    ))}
                </ul>
              }
              headerComponent={
                <div className={Styles.skillCategoryHeader}>{category}</div>
              }
              isOpenOnDefault={false}
              changeOnClick={true}
              openOnHover={true}
            />
          );
        })}
      </Container>
    );
  }

  return null;
};

export default async function Resume() {
  return (
    <ResumeGrid>
      <div className={Styles.leftColumn}>
        <NameSection />
        <TitleSection />
        <EducationSection />
        <CertificationSection />
        <HobbySection />
      </div>
      <div className={Styles.middleColumn}>
        <ProjectSection />
        <WorkExperienceSection />
      </div>
      <SkillSection />
    </ResumeGrid>
  );
}
