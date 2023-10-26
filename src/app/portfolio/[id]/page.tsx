import LanguageIcon from "@/components/icons/LanguageIcons";
import Styles from "../portfolio.module.scss";

import { getProjectDynamic } from "@/data/FetchFromMyDb";
import { ProjectType } from "@/types/MyDbTypes";
import { formatYYYYMMDD } from "@/functions/DateFunctions";

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
        {project.languages.length > 0 && (
          <ul className={Styles.languageList}>
            {project.languages.map((lang) => {
              return (
                <li key={Math.random().toString()}>
                  <LanguageIcon name={lang.toLowerCase()} />
                </li>
              );
            })}
          </ul>
        )}
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
      </div>
    );
  }

  //   TODO: Add 404 error page
  return null;
}
