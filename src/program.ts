import Fabric from "./fab/Fabric";
import MazeFabric from "./fab/MazeFabric";
import Environment from "./LibAbs/Environment/Environment";

function main() {
    let fab:Fabric = new MazeFabric();
    let env:Environment = fab.createEnvironment()
    env.load(fab)
    env.loadPerson(fab)
    env.run()
}

main()
