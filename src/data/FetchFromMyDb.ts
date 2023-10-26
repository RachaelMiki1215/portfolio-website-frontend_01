import { CertificationType, EducationType, HobbyType, ProjectType, SkillType, WorkExperienceType } from "@/types/MyDbTypes";

const baseUrl : string = "https://raebux-portfolio-website-web-api.azurewebsites.net";

const getWorkExperienceDynamic = async (): Promise<WorkExperienceType[]> => {
    const res = await fetch(`${baseUrl}/workexperience`, {next: {revalidate: 60 * 60 * 24 * 10}});
  
    if (res.status == 200) return res.json();
  
    return null;
  };
  
  const getEducation = async (): Promise<EducationType[]> => {
    const res = await await fetch(`${baseUrl}/education`, {cache: "force-cache"});
  
    if (res.status == 200) return res.json();
  
    return null;
  };

  const getProjectsDynamic = async (): Promise<ProjectType[]> => {
    const res = await fetch(`${baseUrl}/project`, {next: {revalidate: 60 * 60 * 24}});

    if (res.status == 200) return res.json();

    return null;
  }

  const getProjectDynamic = async ({projectId} : {projectId : string}): Promise<ProjectType> => {
    const res = await fetch(`${baseUrl}/project/${projectId}`, {next: {revalidate: 60 * 60 * 24}});

    if (res.status == 200) return res.json();

    return null;
  }
  
  const getCertifications = async (): Promise<CertificationType[]> => {
    const res = await fetch(`${baseUrl}/certification`, {cache: "force-cache"});
  
    if (res.status == 200) return res.json();
  
    return null;
  };
  
  const getHobbiesDynamic = async (): Promise<HobbyType[]> => {
    const res = await fetch(`${baseUrl}/hobby`, {next: {revalidate: 60 * 60 * 24 * 10}});
  
    if (res.status == 200) return res.json();
  
    return null;
  };
  
  const getSkillsDynamic = async (): Promise<SkillType[]> => {
    const res = await fetch(`${baseUrl}/skill`, {next: {revalidate: 60 * 60 * 24 * 10}});
  
    if (res.status == 200) return res.json();
  
    return null;
  };

  export {getCertifications, getEducation, getHobbiesDynamic, getSkillsDynamic, getWorkExperienceDynamic, getProjectsDynamic, getProjectDynamic};