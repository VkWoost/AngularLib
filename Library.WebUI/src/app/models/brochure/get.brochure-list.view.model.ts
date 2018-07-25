import { GetBrochureViewModel } from "./get.brochure.view.model";

export class GetBrochureListViewModel {
    constructor() {
        this.brochures = new Array<GetBrochureViewModel>();
    }
    public brochures: Array<GetBrochureViewModel>;
}
