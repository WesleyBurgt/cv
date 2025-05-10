import { Skill } from "./skill"

export class SkillCategory {
    constructor(
        public name: string, 
        public skills: Skill[],
    ) { }
}