export interface Resume {
    name: string;
    email: string;
    phone: string;
    address: string;
    summary: string;
    experience: Experience[];
    education: Education[];
    skills: string[];
}

interface Experience {
    title: string;
    company: string;
    location: string;
    startDate: string; // Consider using Date type if needed
    endDate?: string; // Optional if still working there
    description: string;
}

interface Education {
    degree: string;
    institution: string;
    location: string;
    startDate: string; // Consider using Date type if needed
    endDate: string; // Consider using Date type if needed
    description: string;
}
