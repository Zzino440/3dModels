import {Component, OnInit, ElementRef} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Viewer, XKTLoaderPlugin} from "@xeokit/xeokit-sdk/dist/xeokit-sdk.min.es.js";
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-bim-viewer',
  templateUrl: './bim-viewer.component.html',
  styleUrls: ['./bim-viewer.component.scss']
})
export class BimViewerComponent implements OnInit {

  xktLoader: any;
  modelNode: any;
  metaModel: any;


  constructor(public location: Location, private element: ElementRef) {

  }

  ngOnInit() {
    // xeokit library init
    const viewer = new Viewer({
      canvasId: "myCanvas",
      cameraNear: 0.1
    });

    this.xktLoader = new XKTLoaderPlugin(viewer);
    ["./assets/Architecture1/Architecture.xkt.manifest.json"]
      .map((path) => {
        console.log('path: ', path)
        this.modelNode = this.xktLoader.load({
          id: "Architecture",
          manifestSrc: path,
          edges: true // Emphasise edges
        });
      })

    this.modelNode.on("loaded", () => {
      const scene = viewer.scene;
      const camera = scene.camera;

      camera.eye = [-2.37, 18.97, -26.12];
      camera.look = [10.97, 5.82, -11.22];
      camera.up = [0.36, 0.83, 0.40];
    });
  }
}
