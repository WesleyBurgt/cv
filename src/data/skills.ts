import { Skill, SkillCategory, CategoryManager, ProjectManager, Project, Url } from "@/lib/skillManager"

const csharp: Skill = new Skill("C#", "/images/skills/csharp.svg");
const javaScript: Skill = new Skill("JavaScript", "/images/skills/javascript.svg");
const typescript: Skill = new Skill("TypeScript", "/images/skills/typescript.svg");
const html: Skill = new Skill("HTML", "/images/skills/html.svg");
const css: Skill = new Skill("CSS", "/images/skills/css.svg");
const tailwind: Skill = new Skill("tailwind", "/images/skills/tailwind.svg");
const react: Skill = new Skill("React.js", "/images/skills/react.svg");
const next: Skill = new Skill("Next.js", "/images/skills/next.svg");
const gitHub: Skill = new Skill("GitHub", "/images/skills/github.svg");
const docker: Skill = new Skill("Docker", "/images/skills/docker.svg");
const unity: Skill = new Skill("Unity", "/images/skills/unity.svg");
const blender: Skill = new Skill("Blender", "/images/skills/blender.png");
const sql: Skill = new Skill("SQL", "/images/skills/sql.svg");

export function getCategoryManagerData(): CategoryManager {
    const manager = new CategoryManager();

    const programmingLanguages = new SkillCategory("Programming Languages");
    programmingLanguages.addSkills([
        csharp,
        javaScript,
        typescript,
    ]);

    const markupAndStyle = new SkillCategory("Markup & Style");
    markupAndStyle.addSkills([
        html,
        css,
        tailwind,
    ]);

    const libraries = new SkillCategory("Libraries");
    libraries.addSkills([
        react,
        next,
    ]);

    const versionControl = new SkillCategory("Version control");
    versionControl.addSkills([
        gitHub,
    ]);

    const devOps = new SkillCategory("DevOps");
    devOps.addSkills([
        docker,
    ]);

    const gameEngines = new SkillCategory("Game Engines");
    gameEngines.addSkills([
        unity,
    ]);

    const design = new SkillCategory("Design");
    design.addSkills([
        blender,
    ]);

    const dataBases = new SkillCategory("DataBases");
    dataBases.addSkills([
        sql,
    ]);

    manager.addCategory(programmingLanguages);
    manager.addCategory(markupAndStyle);
    manager.addCategory(libraries);
    manager.addCategory(versionControl);
    manager.addCategory(devOps);
    manager.addCategory(gameEngines);
    manager.addCategory(design);
    manager.addCategory(dataBases);

    return manager;
}

export function getProjectManagerData(): ProjectManager {
    const manager = new ProjectManager();

    const drainingDunesUrls = [
        new Url("GitHub", "https://github.com/WesleyBurgt/Draining-Dunes/"),
        new Url("play game", "https://wesleyburgt.itch.io/draining-dunes")
    ]
    const drainingDunesmyWork = [
        "Implemented and improved car handling throughout the whole project",
        "Implemented mission system",
        "Implemented UI"
    ]
    const drainingDunes = new Project("Draining Dunes", "/images/projects/drainingDunes.png", drainingDunesUrls, drainingDunesmyWork, new Date(2025, 3, 10), new Date(2025, 4, 25), "A delivery simulator game in a desert created for a duo project at Fontys HBO ICT")
    drainingDunes.addSkills([
        csharp,
        unity,
        gitHub
    ])

    manager.addProject(drainingDunes);

    return manager;
}