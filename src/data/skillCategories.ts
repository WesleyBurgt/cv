import { SkillCategory } from "@/lib/skillCategory";
import { FindSkill } from "./skills";

const programmingLanguages = new SkillCategory("Programming Languages", [
    FindSkill("C#"),
    FindSkill("JavaScript"),
    FindSkill("TypeScript"),
]);
const markupAndStyle = new SkillCategory("Markup & Style", [
    FindSkill("HTML"),
    FindSkill("CSS"),
    FindSkill("Tailwind"),
]);
const libraries = new SkillCategory("Libraries", [
    FindSkill("React.js"),
    FindSkill("Next.js"),
]);
const versionControl = new SkillCategory("Version control", [
    FindSkill("GitHub"),
]);
const devOps = new SkillCategory("DevOps", [
    FindSkill("Docker"),
]);
const gameEngines = new SkillCategory("Game Engines", [
    FindSkill("Unity"),
]);
const design = new SkillCategory("Design", [
    FindSkill("Blender"),
]);
const dataBases = new SkillCategory("DataBases", [
    FindSkill("SQL"),
]);

export const SkillCategoryList: SkillCategory[] = [
    programmingLanguages,
    markupAndStyle,
    libraries,
    versionControl,
    devOps,
    gameEngines,
    design,
    dataBases,
]