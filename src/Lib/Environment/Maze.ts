import Person from "../../LibAbs/Person/Person";
import Fabric from "../../fab/Fabric";
import Access from "../../LibAbs/Environment/Access";
import Zone from "../../LibAbs/Environment/Zone";
import Environment from "../../LibAbs/Environment/Environment";

class Maze extends Environment {
    constructor() {
        super();
    }

    load(fab: Fabric): void {
        let b1: Zone = fab.createZone("b1")
        let b2: Zone = fab.createZone("b2")
        let a1: Access = fab.createAccess(b1, b2);
        this.addZone([b1, b2])
        this.addAccess(fab, [a1])
    }

    loadPerson(fab: Fabric): void {
        let p1: Person = fab.createPerson(10, 20, "doe")
        this.addPerson(p1)
    }


    run(): void {
        console.log('simulation')
        console.log(this)
    }
}

export default Maze;
