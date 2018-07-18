import { GetMagazineViewModel } from "./get.magazinemview.model";

export class GetAllMagazinesViewModel {
    constructor() {
        this.magazines = new Array<GetMagazineViewModel>();
    }
    public magazines: GetMagazineViewModel[];
}
