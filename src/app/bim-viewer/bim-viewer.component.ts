import { Component, OnInit, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { Viewer, XKTLoaderPlugin, NavCubePlugin, TreeViewPlugin, FastNavPlugin } from "@xeokit/xeokit-sdk/dist/xeokit-sdk.min.es.js";

@Component({
  selector: 'app-bim-viewer',
  templateUrl: './bim-viewer.component.html',
  styleUrls: ['./bim-viewer.component.scss']
})
export class BimVewerComponent implements OnInit {

  xktLoader: any;
  modelNode: any;
  viewer: any;

  constructor(public location: Location, private element : ElementRef) {

  }

  ngOnInit() {
    // xeokit library init
    this.viewer = new Viewer({
      canvasId: "myCanvas",
      transparent: true,
      toolbarElement: document.getElementById("myToolbar"),
      saoEnabled: true
    });

    this.viewer.scene.camera.eye = [515092.9107528674, 20.706430764655682, -5037490.650574805];
    this.viewer.scene.camera.look = [515147.3155893674, 22.564717905146725, -5037468.300825426];
    this.viewer.scene.camera.up = [-0.02921011102805408, 0.9995012646123095, -0.01199964383315585];

    new NavCubePlugin(this.viewer, {
      canvasId: "myNavCubeCanvas",
      visible: true,
      size: 250,
      alignment: "bottomRight",
      bottomMargin: 100,
      rightMargin: 10
    });

    new FastNavPlugin(this.viewer, {
      hideEdges: true,
      hideSAO: true,
      hideColorTexture: false,
      hidePBR: false,
      hideTransparentObjects: false,
      scaleCanvasResolution: false,
      scaleCanvasResolutionFactor: 0.5,
      delayBeforeRestore: true,
      delayBeforeRestoreSeconds: 0.4
    });

    new TreeViewPlugin(this.viewer, {
      containerElement: document.getElementById("treeViewContainer"),
      hierarchy: "types",
      autoExpandDepth: 1
    });


    this.xktLoader = new XKTLoaderPlugin(this.viewer);

    ["./assets/bim/Architecture.xkt", "./assets/bim/Basement.xkt", "./assets/bim/Facade.xkt", "./assets/bim/MEP.xkt",
      "./assets/bim/Structure.xkt"].map((path) => {
      this.modelNode = this.xktLoader.load({
        src: path,
        saoEnabled: true,
        edges: true,
        dtxEnabled: true
      });
    })

    this.modelNode.on("loaded", () => {
      this.viewer.cameraFlight.jumpTo(this.modelNode);
    });
  }

  getInfo(){
    console.log("eye", this.viewer.scene.camera.eye);
    console.log("look", this.viewer.scene.camera.look);
    console.log("up", this.viewer.scene.camera.up);
  }
}
