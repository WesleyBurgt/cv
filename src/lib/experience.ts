export class Experience {
    constructor(
        public name: string,
        public startYear: number,
        public endYear?: number,
        public extraInfo?: string,
    ) { }
}