import Skill from "./skill";

enum Domain {
    Web,
    Connect,
    Backend
}

export interface Junior {
    name: string;
    age: number;
    skills: Skill[];
    date_of_promotion: Date;
    domain: Domain;
}