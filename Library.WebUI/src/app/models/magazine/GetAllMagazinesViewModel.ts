import { GetMagazineViewModel } from "./GetMagazineViewModel";

export class GetAllMagazinesViewModel {
    constructor() {
        this.magazines = new Array<GetMagazineViewModel>();
    }
    public magazines: GetMagazineViewModel[];
}
