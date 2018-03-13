import Environment from "../LibAbs/Environment/Environment";
import Zone from "../LibAbs/Environment/Zone";
import Access from "../LibAbs/Environment/Access";
import Person from "../LibAbs/Person/Person";

interface Fabric {
    createEnvironment(): Environment;
    createZone(name:string): Zone;
    createAccess(start:Zone, end:Zone): Access;
    createPerson(energize: number, health: number, name: string): Person;
}

export default Fabric;
