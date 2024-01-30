"use client";

import Style from "./portfolio.module.scss";

import { usePathname } from "next/navigation";

import { useWindowSize } from "@/hooks/usePageDimension";
import { ProjectType } from "@/types/MyDbTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "@/functions/DateFunctions";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import LanguageIcon from "@/components/icons/LanguageIcons";

const ProjectList: React.FC<{ projects: ProjectType[]; currPath: string }> = ({
  projects,
  currPath,
}) => {
  // TODO: I know you hate to do so, but you probably should think about pagination soon.

  const [currProjectId, setCurrProjectId] = useState<string>("");

  useEffect(() => {
    setCurrProjectId(currPath.split("/").pop());
  }, [currPath]);

  return (
    <ul
      className={`${Style.projectList} ${
        currProjectId !== "portfolio" && Style.isProjectDetailsShown
      }`}
    >
      {projects
        .sort(
          (a, b) => Date.parse(b.publishedDate) - Date.parse(a.publishedDate)
        )
        .map((project) => {
          return (
            <li
              className={`${Style.projectItem} ${
                currProjectId === project.id && Style.isSelected
              }`}
              key={`project_${project.id}`}
            >
              <span>
                <span className={Style.projectTitle}>{project.title}</span>
                {project.didAtWorkId && <FontAwesomeIcon icon={faSuitcase} />}
              </span>
              <span className={Style.projectDate}>
                {formatDate(project.publishedDate)}
              </span>
              {/* {project.keywords.length > 0 && (
                <ul className={Style.projectKeywords}>
                  {project.keywords.map((keyword) => {
                    return (
                      <li
                        key={`project_${project.id}_${keyword}`}
                        className={Style.projectKeyword}
                      >
                        {keyword}
                      </li>
                    );
                  })}
                </ul>
              )} */}
              <ul className={Style.languageList}>
                {project.languages.map((lang) => {
                  return (
                    <li key={Math.random().toString()}>
                      <LanguageIcon name={lang.toLowerCase()} />
                    </li>
                  );
                })}
              </ul>
              <Link
                href={`/portfolio/${project.id}`}
                className={Style.projectButton}
              />
            </li>
          );
        })}
    </ul>
  );
};

type Layout_LeftContentDisplayType = {
  projects: ProjectType[];
  rightContent: React.ReactNode | string;
};

const Layout_Client: React.FC<Layout_LeftContentDisplayType> = ({
  projects,
  rightContent,
}) => {
  const pathname = usePathname();
  const onPortfolioTop: boolean =
    pathname === "/portfolio" || pathname === "/portfolio/";

  const windowSize = useWindowSize();

  const projectDetailsContainerRef = useRef<HTMLDivElement>();

  const [isProjectDetailsTall, setIsProjectDetailsTall] =
    useState<boolean>(false);

  useEffect(() => {
    if (projectDetailsContainerRef.current.clientHeight > 820) {
      setIsProjectDetailsTall(true);
    } else setIsProjectDetailsTall(false);
  }, [windowSize]);

  return (
    <>
      {(windowSize.width > 900 || onPortfolioTop) && (
        <ProjectList projects={projects} currPath={pathname} />
      )}
      <div
        className={`${Style.projectDetailsContainer} ${
          isProjectDetailsTall && Style.isProjectDetailsTall
        }`}
        ref={projectDetailsContainerRef}
      >
        {rightContent}
      </div>
    </>
  );
};

export default Layout_Client;
