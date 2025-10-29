import { WorkExperience } from "@/lib/workExperience";

const jumbo = new WorkExperience("Jumbo", new Date(2021, 11, 29), new Date(2023,7,10), "stocker");

export const WorkExperienceList: WorkExperience[] = [
    jumbo,
]