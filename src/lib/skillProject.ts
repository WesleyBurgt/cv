import { Skill } from "./skill";
import { Url } from "./url";

export class Project {
    constructor(
        public name: string,
        public icon: string,
        public skills: Skill[],
        public urls: Url[],
        public myWork: string[],
        public startDate: Date,
        public endDate?: Date,
        public extraInfo?: string
    ) { }
}