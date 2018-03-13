import Person from "../../LibAbs/Person/Person";

class PLost implements Person {
    energize: number;
    health: number;
    name: string;

    constructor() {
        this.energize = 0
        this.health = 0
        this.name = ""
    }
}

export default PLost;
