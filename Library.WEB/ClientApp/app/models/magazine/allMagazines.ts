import { Magazine } from "../magazine/magazine";

export class AllMagazines {
    constructor() {
        this.magazines = new Array<Magazine>();
    }
    public magazines: Magazine[];
}