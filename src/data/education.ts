import { Education } from "@/lib/education";

const udensCollege = new Education("Havo Udens College", 2018, 2023, "Classes: mathematics, physics, science, biology, economics, Dutch, English");
const fontys = new Education("HBO Fontys Eindhoven", 2023, undefined, "ICT software development")

export const EducationList: Education[] = [
    udensCollege,
    fontys,
];