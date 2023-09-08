import { CertificationType, EducationType, HobbyType, SkillType, WorkExperienceType } from "@/types/MyDbTypes";

const getWorkExperience = async (): Promise<WorkExperienceType[]> => {
    const res = await fetch(
      "https://raebux-portfolio-website-web-api.azurewebsites.net/workexperience",
      { cache: "force-cache" }
    );
  
    if (res.status == 200) return res.json();
  
    return null;
  };
  
  const getEducation = async (): Promise<EducationType[]> => {
    const res = await fetch(
      "https://raebux-portfolio-website-web-api.azurewebsites.net/education",
      { cache: "force-cache" }
    );
  
    if (res.status == 200) return res.json();
  
    return null;
  };
  
  const getCertifications = async (): Promise<CertificationType[]> => {
    const res = await fetch(
      "https://raebux-portfolio-website-web-api.azurewebsites.net/certification",
      { cache: "force-cache" }
    );
  
    if (res.status == 200) return res.json();
  
    return null;
  };
  
  const getHobbies = async (): Promise<HobbyType[]> => {
    const res = await fetch(
      "https://raebux-portfolio-website-web-api.azurewebsites.net/hobby",
      { cache: "force-cache" }
    );
  
    if (res.status == 200) return res.json();
  
    return null;
  };
  
  const getSkills = async (): Promise<SkillType[]> => {
    const res = await fetch(
      "https://raebux-portfolio-website-web-api.azurewebsites.net/skill",
      { cache: "force-cache" }
    );
  
    if (res.status == 200) return res.json();
  
    return null;
  };

  export {getCertifications, getEducation, getHobbies, getSkills, getWorkExperience};