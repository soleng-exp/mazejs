import Fabric from "../../fab/Fabric";
import Person from "../Person/Person";
import Access from "./Access";
import Zone from "./Zone";

abstract class Environment {
    personList: Person[]
    zoneList: Zone[]
    accessList: Access[]

    protected constructor() {
        this.personList = []
        this.zoneList = []
        this.accessList = []
    }

    public abstract run(): void;
    public abstract load(fab: Fabric): void
    public abstract loadPerson(fab: Fabric): void

    public addPerson(person: Person) {
        this.personList.push(person)
        this.zoneList[0].addPerson(person)
    }

    protected addZone(zones:Zone[]) {
        console.log(zones)
        this.zoneList = this.zoneList.concat(zones)
        console.log(this)
    }

    protected addAccess(fab:Fabric, access:Access[]) {
        this.accessList = this.accessList.concat(access)
        /** @var Access access */
        access.forEach((access:Access) => {
            let accessInv:Access = fab.createAccess(access.end, access.start)
            this.accessList.push(accessInv)
        })
    }

}

export default Environment;
