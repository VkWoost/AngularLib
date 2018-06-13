import { MagazineGetView } from "./magazineGetView";

export class AllMagazines {
    constructor() {
        this.magazines = new Array<MagazineGetView>();
    }
  public magazines: MagazineGetView[];
}
