import Styles from "./timeline.module.scss";
import { Timeline, TimelineEvent } from "@/components/timeline/Timeline";
import { formatDate } from "@/functions/DateFunctions";
import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import {
  getCertifications,
  getEducation,
  getWorkExperienceDynamic,
} from "@/data/FetchFromMyDb";

export const metadata: Metadata = {
  title: "Rachael Miki Buxton | Portfolio Website | Timeline",
  description: "Timeline of education, work experience, etc.",
};

export default async function TimelinePage() {
  const dataArr: any[] = await dataJson();

  return (
    <main className={Styles.main}>
      <Timeline containerClassName={Styles.timelineContainer}>
        {dataArr.map((item) => {
          if (item.type === "workExperience") {
            return (
              <TimelineEvent
                startDate={item.startDate}
                endDate={item.endDate}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
                key={Math.random().toString()}
              >
                <h2 className={Styles.period}>
                  {formatDate(Date.parse(item.startDate))} ~{" "}
                  {item.endDate
                    ? formatDate(Date.parse(item.endDate))
                    : "Present"}
                </h2>
                <h1 className={Styles.eventTitle}>{item.position}</h1>
                <h2 className={Styles.eventSubtitle}>{item.company}</h2>
                <ul className={Styles.responsibilities}>
                  {item.responsibilities
                    .slice(0, 3)
                    .map((responsibility: string) => {
                      return (
                        <li
                          dangerouslySetInnerHTML={{ __html: responsibility }}
                        ></li>
                      );
                    })}
                </ul>
              </TimelineEvent>
            );
          } else if (item.type === "education") {
            return (
              <TimelineEvent
                startDate={item.graduationDate}
                endDate={item.graduationDate}
                icon={<FontAwesomeIcon icon={faGraduationCap} />}
                key={Math.random().toString()}
              >
                <h2 className={Styles.period}>
                  {formatDate(Date.parse(item.graduationDate))}
                </h2>
                <h1 className={Styles.eventTitle}>{item.title}</h1>
                <h2 className={Styles.eventSubtitle}>{item.institute}</h2>
                <div
                  className={Styles.educationDescription}
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
              </TimelineEvent>
            );
          } else if (item.type === "certification") {
            return (
              <TimelineEvent
                startDate={item.obtainedDate}
                endDate={item.obtainedDate}
                icon={<FontAwesomeIcon icon={faCertificate} />}
                key={Math.random().toString()}
              >
                <h2 className={Styles.period}>
                  {formatDate(Date.parse(item.obtainedDate))}
                </h2>
                <h1 className={Styles.eventTitle}>{item.name}</h1>
              </TimelineEvent>
            );
          }
        })}
      </Timeline>
    </main>
  );
}

const dataJson = async () => {
  let arr = new Array();
  const workExperienceData: Array<any> = await getWorkExperienceDynamic();
  const educationData: Array<any> = await getEducation();
  const certificationData: Array<any> = await getCertifications();

  if (workExperienceData) {
    workExperienceData.forEach((item) => {
      let object = {
        type: "workExperience",
        ...item,
      };
      arr.push(object);
    });
  }
  if (educationData) {
    educationData.forEach((item) => {
      let object = {
        type: "education",
        title: item.degree + " in " + item.major,
        ...item,
      };
      arr.push(object);
    });
  }
  if (certificationData) {
    certificationData.forEach((item) => {
      let object = {
        type: "certification",
        ...item,
      };
      arr.push(object);
    });
  }

  return arr;
};
