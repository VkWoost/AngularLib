import { GetBrochureViewModel } from "./get.brochure.view.model";

export class GetAllBrochuresViewModel {
    constructor() {
        this.brochures = new Array<GetBrochureViewModel>();
    }
    public brochures: GetBrochureViewModel[]
}
