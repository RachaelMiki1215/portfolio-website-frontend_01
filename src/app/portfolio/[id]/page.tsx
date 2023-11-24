import LanguageIcon from "@/components/icons/LanguageIcons";
import Styles from "../portfolio.module.scss";

import { getProjectDynamic } from "@/data/FetchFromMyDb";
import { ProjectType } from "@/types/MyDbTypes";
import { formatYYYYMMDD } from "@/functions/DateFunctions";
import { InlineLink } from "@/components/inline-elements/Links";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const KeywordsSection = ({ project }: { project: ProjectType }) => {
  return (
    <ul className={Styles.projectKeywords}>
      {project.keywords.map((keyword) => {
        return (
          <li key={Math.random().toString()} className={Styles.projectKeyword}>
            {keyword}
          </li>
        );
      })}
      {project.didAtWorkId && (
        <li
          key={Math.random().toString()}
          className={`${Styles.projectKeyword} ${Styles.workProjectIndicator}`}
        >
          Work Project
        </li>
      )}
    </ul>
  );
};

const LanguagesSection = ({ project }: { project: ProjectType }) => {
  return (
    <ul className={Styles.languageList}>
      {project.languages.map((lang) => {
        return (
          <li key={Math.random().toString()}>
            <LanguageIcon name={lang.toLowerCase()} />
          </li>
        );
      })}
    </ul>
  );
};

const LinksSection = ({ project }: { project: ProjectType }) => {
  return (
    <>
      <h3>Links</h3>
      <ul>
        {project.demoLink && (
          <li key="link_demo">
            <InlineLink href={project.demoLink} isInternal={false}>
              Demo
            </InlineLink>
          </li>
        )}
        {project.distributionLink && (
          <li key="link_distro">
            <InlineLink href={project.distributionLink} isInternal={false}>
              Distribution Location
            </InlineLink>
          </li>
        )}
        {project.repoLink && (
          <li key="link_repo">
            <InlineLink href={project.repoLink} isInternal={false}>
              Repository
            </InlineLink>
          </li>
        )}
      </ul>
    </>
  );
};

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const project: ProjectType = await getProjectDynamic({
    projectId: params.id,
  });

  return {
    title: `Rachael Miki Buxton | Portfolio Website | Portfolio | ${project.title}`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project: ProjectType = await getProjectDynamic({
    projectId: params.id,
  });

  if (project) {
    return (
      <div className={Styles.projectDetails}>
        <h2 className={Styles.title}>{project.title}</h2>
        {(project.keywords.length > 0 || project.didAtWorkId) && (
          <KeywordsSection project={project} />
        )}
        {project.languages.length > 0 && <LanguagesSection project={project} />}
        {project.summary && (
          <>
            <h3>Summary</h3>
            <p>{project.summary}</p>
          </>
        )}
        {project.body && (
          <>
            <h3>Details</h3>
            <p dangerouslySetInnerHTML={{ __html: project.body }} />
          </>
        )}
        <span className={Styles.date}>
          Published: {formatYYYYMMDD(project.publishedDate)}
        </span>
        {project.publishedDate !== project.updatedDate && (
          <span className={Styles.date}>
            Updated: {formatYYYYMMDD(project.updatedDate)}
          </span>
        )}
        {(project.demoLink || project.distributionLink || project.repoLink) && (
          <LinksSection project={project} />
        )}
      </div>
    );
  }

  return notFound();
}
