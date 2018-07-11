import { BrochureGetView } from "./brochureGetView";

export class AllBrochures {
    constructor() {
        this.brochures = new Array<BrochureGetView>();
    }
    public brochures: BrochureGetView[]
}
