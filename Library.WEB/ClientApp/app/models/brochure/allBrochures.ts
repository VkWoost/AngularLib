import { Brochure } from "../brochure/brochure";

export class AllBrochures {
    constructor(
    ) {
        this.brochures = new Array<Brochure>();
    }
    public brochures: Brochure[]

}