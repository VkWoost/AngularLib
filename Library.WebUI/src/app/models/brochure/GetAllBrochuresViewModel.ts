import { GetBrochureViewModel } from "./GetBrochureViewModel";

export class GetAllBrochuresViewModel {
    constructor() {
        this.brochures = new Array<GetBrochureViewModel>();
    }
    public brochures: GetBrochureViewModel[]
}
