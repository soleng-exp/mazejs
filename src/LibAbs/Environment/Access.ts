import Zone from "./Zone";

abstract class Access {
    public start: Zone
    public end: Zone

    protected constructor(start: Zone, end: Zone) {
        this.start = start
        this.end = end
    }

    get name() {
        return this.start.name + "->" + this.end.name
    }
}

export default Access;
