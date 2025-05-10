export class Experience {
    public extraInfo?: string;

    constructor(
        public name: string,
        public startYear: number,
        public endYear?: number
    ) { }
}

export class Education extends Experience { }

export class WorkExperience extends Experience { }