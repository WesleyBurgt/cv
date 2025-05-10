import { Skill } from "@/lib/skill"

const skillsImagesPath = "/cv/images/skills"

const csharp: Skill = new Skill("C#", skillsImagesPath + "/csharp.svg");
const javaScript: Skill = new Skill("JavaScript", skillsImagesPath + "/javascript.svg");
const typescript: Skill = new Skill("TypeScript", skillsImagesPath + "/typescript.svg");
const html: Skill = new Skill("HTML", skillsImagesPath + "/html.svg");
const css: Skill = new Skill("CSS", skillsImagesPath + "/css.svg");
const tailwind: Skill = new Skill("Tailwind", skillsImagesPath + "/tailwind.svg");
const react: Skill = new Skill("React.js", skillsImagesPath + "/react.svg");
const next: Skill = new Skill("Next.js", skillsImagesPath + "/next.svg");
const gitHub: Skill = new Skill("GitHub", skillsImagesPath + "/github.svg");
const docker: Skill = new Skill("Docker", skillsImagesPath + "/docker.svg");
const unity: Skill = new Skill("Unity", skillsImagesPath + "/unity.svg");
const blender: Skill = new Skill("Blender", skillsImagesPath + "/blender.png");
const sql: Skill = new Skill("SQL", skillsImagesPath + "/sql.svg");

export const SkillList: Skill[] = [
    csharp,
    javaScript,
    typescript,
    html,
    css,
    tailwind,
    react,
    next,
    gitHub,
    docker,
    unity,
    blender,
    sql,
]

export function FindSkill(name: string): Skill {
    const skill = SkillList.find(skill => skill.name === name);
    if (!skill) {
        throw new Error(`Skill "${name}" not found`);
    }
    return skill;
}