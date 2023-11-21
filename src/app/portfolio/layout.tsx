import Styles from "./portfolio.module.scss";

import { getProjectsDynamic } from "@/data/FetchFromMyDb";
import { formatDate } from "@/functions/DateFunctions";
import { ProjectType } from "@/types/MyDbTypes";
import React from "react";
import Layout_LeftContentDisplay from "./layout_client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";

const ProjectList: React.FC = async () => {
  // TODO: I know you hate to do so, but you probably should think about pagination soon.
  const projects: ProjectType[] = await getProjectsDynamic();

  return (
    <ul className={Styles.projectList}>
      {projects
        .sort(
          (a, b) => Date.parse(b.publishedDate) - Date.parse(a.publishedDate)
        )
        .map((project) => {
          return (
            <li className={Styles.projectItem} key={`project_${project.id}`}>
              <span>
                <span className={Styles.projectTitle}>{project.title}</span>
                {project.didAtWorkId && <FontAwesomeIcon icon={faSuitcase} />}
              </span>
              <span className={Styles.projectDate}>
                {formatDate(project.publishedDate)}
              </span>
              {project.keywords.length > 0 && (
                <ul className={Styles.projectKeywords}>
                  {project.keywords.map((keyword) => {
                    return (
                      <li
                        key={`project_${project.id}_${keyword}`}
                        className={Styles.projectKeyword}
                      >
                        {keyword}
                      </li>
                    );
                  })}
                </ul>
              )}
              <Link
                href={`/portfolio/${project.id}`}
                className={Styles.projectButton}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout_LeftContentDisplay
      leftContent={<ProjectList />}
      rightContent={children}
    />
  );
}
