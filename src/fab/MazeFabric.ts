import Fabric from "./Fabric";
import Environment from "../LibAbs/Environment/Environment";
import Zone from "../LibAbs/Environment/Zone";
import Field from "../Lib/Environment/Field";
import Access from "../LibAbs/Environment/Access";
import Person from "../LibAbs/Person/Person";
import PLost from "../Lib/Person/PLost";
import Way from "../Lib/Environment/Way";
import Maze from "../Lib/Environment/Maze";

class MazeFabric implements Fabric {
    createEnvironment(): Environment {
        return new Maze();
    }

    createZone(name: string): Zone {
        return new Field(name);
    }

    createAccess(start: Zone, end: Zone): Access {
        return new Way(start, end);
    }

    createPerson(energize: number, health: number, name: string): Person {
        let p: Person = new PLost();
        p.energize = energize
        p.health = health
        p.name = name

        return p;
    }
}

export default MazeFabric;
