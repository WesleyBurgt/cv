import { WorkExperience } from "@/lib/experience";

const jumbo = new WorkExperience("Jumbo", 2022, 2023);
jumbo.extraInfo = "stocker";

export const WorkExperienceList: WorkExperience[] = [
    jumbo,
]