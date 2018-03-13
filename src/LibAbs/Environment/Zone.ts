import Person from "../Person/Person";
import Access from "./Access";

abstract class Zone {
    readonly name: string;
    protected accessList: Access[]
    protected personList: Person[]
    protected position: Position

    protected constructor(name: string) {
        this.name = name
        this.accessList = []
        this.personList = []
    }

    public addPerson(person: Person) {
        this.personList.push(person)
    }

    public removePerson(person: Person) {
        this.personList.splice(this.personList.indexOf(person), 1)
    }

    public addAccess(access: Access) {
        this.accessList.push(access)
    }
}

export default Zone;