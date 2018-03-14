import Fabric from "./fab/Fabric";
import MazeFabric from "./fab/MazeFabric";
import Environment from "./LibAbs/Environment/Environment";
import Engine from "./Engine/Engine";

function main() {
    let fab: Fabric = new MazeFabric();
    let env: Environment = fab.createEnvironment()
    env.load(fab)
    env.loadPerson(fab)
    env.run()

    let engine: Engine = new Engine();
    engine.env = env
    engine.init()
    engine.draw()
}

main()
