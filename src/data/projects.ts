import { Url } from "@/lib/url";
import { FindSkill } from "./skills";
import { Project } from "@/lib/skillProject";

const projectsImagesPath = "/cv/images/projects";

const littleMontanaSkills = [
    FindSkill("HTML"),
    FindSkill("CSS"),
];
const littleMontanaUrls = [new Url("visit site", "https://littlemontana.nl/")];
const littlemontanaMyWork = [
    "Entire HTML and CSS",
    "Updating agenda"
];
const littleMontana = new Project("Little Montana", projectsImagesPath + "/littleMontana.svg", littleMontanaSkills, littleMontanaUrls, littlemontanaMyWork, new Date(2023, 8), undefined, "A site for a country band, whose content I am still updating");

const drainingDunesSkills = [
    FindSkill("C#"),
    FindSkill("Unity"),
    FindSkill("GitHub"),
    FindSkill("Blender"),
];
const drainingDunesUrls = [
    new Url("GitHub", "https://github.com/WesleyBurgt/Draining-Dunes/"),
    new Url("play game", "https://wesleyburgt.itch.io/draining-dunes")
];
const drainingDunesMyWork = [
    "Implemented and improved car handling throughout the whole project",
    "Implemented mission system",
    "Implemented UI",
    "Modeled navigation cursor",
];
const drainingDunes = new Project("Draining Dunes", projectsImagesPath + "/drainingDunes.png", drainingDunesSkills, drainingDunesUrls, drainingDunesMyWork, new Date(2025, 3, 10), new Date(2025, 4, 25), "A delivery simulator game in a desert created for a duo project at Fontys HBO ICT");

export const ProjectList: Project[] = [
    littleMontana,
    drainingDunes,
];