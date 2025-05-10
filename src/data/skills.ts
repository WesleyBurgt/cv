import { Skill, SkillCategory, CategoryManager, ProjectManager, Project, Url } from "@/lib/skillManager"

const skillsImagesPath = "/cv/images/skills"

const csharp: Skill = new Skill("C#", skillsImagesPath + "/csharp.svg");
const javaScript: Skill = new Skill("JavaScript", skillsImagesPath + "/javascript.svg");
const typescript: Skill = new Skill("TypeScript", skillsImagesPath + "/typescript.svg");
const html: Skill = new Skill("HTML", skillsImagesPath + "/html.svg");
const css: Skill = new Skill("CSS", skillsImagesPath + "/css.svg");
const tailwind: Skill = new Skill("tailwind", skillsImagesPath + "/tailwind.svg");
const react: Skill = new Skill("React.js", skillsImagesPath + "/react.svg");
const next: Skill = new Skill("Next.js", skillsImagesPath + "/next.svg");
const gitHub: Skill = new Skill("GitHub", skillsImagesPath + "/github.svg");
const docker: Skill = new Skill("Docker", skillsImagesPath + "/docker.svg");
const unity: Skill = new Skill("Unity", skillsImagesPath + "/unity.svg");
const blender: Skill = new Skill("Blender", skillsImagesPath + "/blender.png");
const sql: Skill = new Skill("SQL", skillsImagesPath + "/sql.svg");

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
    const projectsImagesPath = "/cv/images/projects";

    const littleMontanaUrls = [new Url("visit site", "https://littlemontana.nl/")]
    const littlemontanaMyWork = [
        "Entire HTML and CSS",
        "Updating agenda"
    ]
    const littleMontana = new Project("Little Montana", projectsImagesPath + "/littleMontana.svg", littleMontanaUrls, littlemontanaMyWork, new Date(2023,8), undefined, "A site for a country band, whose content I am still updating")
    littleMontana.addSkills([
        html,
        css
    ])
    
    const drainingDunesUrls = [
        new Url("GitHub", "https://github.com/WesleyBurgt/Draining-Dunes/"),
        new Url("play game", "https://wesleyburgt.itch.io/draining-dunes")
    ]
    const drainingDunesMyWork = [
        "Implemented and improved car handling throughout the whole project",
        "Implemented mission system",
        "Implemented UI"
    ]
    const drainingDunes = new Project("Draining Dunes", projectsImagesPath + "/drainingDunes.png", drainingDunesUrls, drainingDunesMyWork, new Date(2025, 3, 10), new Date(2025, 4, 25), "A delivery simulator game in a desert created for a duo project at Fontys HBO ICT")
    drainingDunes.addSkills([
        csharp,
        unity,
        gitHub
    ])

    manager.addProject(littleMontana);
    manager.addProject(drainingDunes);

    return manager;
}