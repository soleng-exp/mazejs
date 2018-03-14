/// <reference path="../../node_modules/babylonjs/babylon.d.ts" />
import * as BABYLON from 'babylonjs'
import Environment from "../LibAbs/Environment/Environment";

export default class Engine {
    canvas: HTMLCanvasElement
    engine: BABYLON.Engine
    scene: BABYLON.Scene
    camera: BABYLON.TargetCamera
    env: Environment
    mesh: Map<string, BABYLON.Mesh>

    // mesh: { [key: string]: BABYLON.Mesh }

    constructor() {
        if (!BABYLON.Engine.isSupported()) {
            throw new DOMException("BabylonJs not supported")
        }

        this.canvas = <HTMLCanvasElement>document.getElementById('main')
        this.engine = new BABYLON.Engine(this.canvas, false)
        this.mesh = new Map()
    }

    init() {
        this.scene = this.createScene()
        let opt = {diameterTop: 1, diameterBottom: 0.1, tessellation: 4}
        this.mesh.set('player', BABYLON.MeshBuilder.CreateCylinder('player', opt, this.scene))
        // this.camera = new BABYLON.FreeCamera('cam1', new BABYLON.Vector3(0, 5, -10), this.scene);
        this.camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2, 3 * Math.PI / 8, 5, BABYLON.Vector3.Zero(), this.scene);
        this.camera.lockedTarget = this.mesh.get('player')
        this.scene.activeCamera = this.camera
    }

    createScene() {
        const scene = new BABYLON.Scene(this.engine)

        var f = new BABYLON.Vector4(0.1, 0.9, 1 / 1070, 0.9); // front image = half the whole image along the width
        var b = new BABYLON.Vector4(0.1, 0.9, 1 / 1070, 0.9); // back image = second half along the width

        let opt = {height: 1, width: 0.665, sideOrientation: BABYLON.Mesh.DOUBLESIDE, frontUVs: f, backUVs: b}
        const ground = BABYLON.MeshBuilder.CreatePlane('gr1', opt, scene)

        const floor = new BABYLON.StandardMaterial("floor", scene);
        floor.diffuseTexture = new BABYLON.Texture("./resources/Dungeon1.png", scene);
        ground.material = floor
        var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
        light.intensity = 0.7;

        return scene
    }

    draw() {
        this.engine.runRenderLoop(() => {
            this.scene.render();
        });

    }
}