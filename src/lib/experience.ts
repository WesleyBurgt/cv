export class Experience {
    constructor(
        public name: string,
        public startYear: number,
        public endYear?: number,
        public extraInfo?: string,
    ) { }
}

export class Education extends Experience { }

export class WorkExperience extends Experience { }