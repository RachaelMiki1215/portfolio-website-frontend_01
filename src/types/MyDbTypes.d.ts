type ArticleType = {
    id: string;
    title?: string;
    publishedDate: string;
    summary?: string;
    body?: string;
    keywords?: string[]; 
    comments?: CommentType[];
}

type BucketListItemType = {
    id: string;
    name?: string;
    description?: string;
    category?: string;
}

type CertificationType = {
    id: string;
    name?: string;
    description?: string;
    skillId?: string;
    obtainedDate: string;
}

type EducationType = {
    id: string;
    institute?: string;
    instituteAcronym?: string;
    instituteCity?: string;
    graduationDate: string;
    degree?: string;
    major?: string;
    description?: string;
}

type HobbyType = {
    id: string;
    name?: string;
    description?: string;
}

type ProjectType = {
    id: string;
    title?: string;
    publishedDate: string;
    updatedDate: string;
    summary?: string;
    keywords?: string[];
    platform?: string;
    repoLink?: string;
    distributionLink?: string;
    demoLink?: string;
    didAtWorkId?: string;
    comments?: CommentType[];
}

type SkillType = {
    id: string;
    name?: string;
    category?: string;
    description?: string;
    proficiency: number;
    acquiredAtWorkId?: string;
}

type WorkExperienceType = {
    id: string;
    company?: string;
    position?: string;
    startDate: string;
    endDate: string;
    shortDescription?: string;
    responsibilities?: string;
    accomplishments?: string;
}

type CommentType = {
    id: number;
    commenter?: string;
    date: string;
    body?: string;
    replyToId: number;
}

export { ArticleType, BucketListItemType, CertificationType, CommentType, EducationType, HobbyType, ProjectType, SkillType, WorkExperienceType };