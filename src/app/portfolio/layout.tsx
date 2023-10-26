import Styles from "./portfolio.module.scss";

import { getProjectsDynamic } from "@/data/FetchFromMyDb";
import { formatDate } from "@/functions/DateFunctions";
import { ProjectType } from "@/types/MyDbTypes";
import React from "react";
import Layout_LeftContentDisplay from "./layout_client";
import Link from "next/link";

const ProjectList: React.FC = async () => {
  const projects: ProjectType[] = await getProjectsDynamic();

  return (
    <ul className={Styles.projectList}>
      {projects
        .sort(
          (a, b) => Date.parse(b.publishedDate) - Date.parse(a.publishedDate)
        )
        .map((project) => {
          return (
            <li className={Styles.projectItem}>
              <span className={Styles.projectTitle}>{project.title}</span>
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
