import Access from "../../LibAbs/Environment/Access";
import Zone from "../../LibAbs/Environment/Zone";

class Way extends Access {
    constructor(start: Zone, end: Zone) {
        super(start, end);
    }
}

export default Way;
