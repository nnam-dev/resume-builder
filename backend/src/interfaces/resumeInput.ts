// src/interfaces/resumeInput.ts

export interface ResumeInput {
    name: string;
    email: string;
    phone: string;
    address: string;
    summary: string;
    experience: ExperienceInput[];
    education: EducationInput[];
    skills: string[];
}

export interface ExperienceInput {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate?: string;
    description: string;
}

export interface EducationInput {
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
}
