import { GetMagazineViewModel } from "./get.magazinemview.model";

export class GetMagazineListViewModel {
    constructor() {
        this.magazines = new Array<GetMagazineViewModel>();
    }
    public magazines: Array<GetMagazineViewModel>;
}
