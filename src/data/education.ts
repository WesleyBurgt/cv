import { Education } from "@/lib/experience";

const udensCollege = new Education("Havo Udens College", 2018, 2023);
udensCollege.extraInfo = "Classes: mathematics, physics, science, biology, economics, Dutch, English";
const fontys = new Education("HBO Fontys Eindhoven", 2023)
fontys.extraInfo = "ICT software development";

export const EducationList: Education[] = [
    udensCollege, 
    fontys,
];