import { Experience } from "./experience";

export class WorkExperience extends Experience {
    constructor(
        public name: string,
        public startDate: Date,
        public endDate?: Date,
        public extraInfo?: string,
    ) {
        super(name, startDate.getFullYear(), endDate?.getFullYear(), extraInfo);
    }
}