export class Skill {
    constructor(
        public name: string,
        public icon: string,
    ) { }
}

export class SkillCategory {
    public skills: Skill[] = []

    constructor(public name: string) { }

    addSkills(skills: Skill[]): void {
        this.skills.push(...skills)
    }
}

export class CategoryManager {
    public categories: SkillCategory[] = [];

    constructor() { }

    addCategory(category: SkillCategory): void {
        this.categories.push(category);
    }
}

export class Project {
    public skills: Skill[] = []

    constructor(
        public name: string,
        public icon: string,
        public urls: Url[],
        public myWork: string[],
        public startDate: Date,
        public endDate?: Date,
        public extraInfo?: string
    ) { }

    addSkills(skills: Skill[]): void {
        this.skills.push(...skills)
    }
}

export class Url {
    constructor(
        public text: string,
        public link: string
    ) { }
}

export class ProjectManager {
    public projects: Project[] = [];

    constructor() {}

    addProject(project: Project): void {
        this.projects.push(project);
    }
}


