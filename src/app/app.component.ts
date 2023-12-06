import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

/*
npm install da eseguire:
npm install --save three
npm install --save @types/three
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') private canvasRef!: ElementRef;

  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGLRenderer;
  controls!: OrbitControls;
  modelPath = "assets/IFC_Facade.glb"

  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(50, 50, 200); // Imposta la camera più lontana
    this.renderer = new THREE.WebGLRenderer({antialias: true});
    /*    this.renderer.setPixelRatio(window.devicePixelRatio); // Opzionale, per una migliore qualità dell'immagine*/
  }

  ngOnInit() {

  }


  ngAfterViewInit() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.canvasRef.nativeElement.appendChild(this.renderer.domElement);
    // Inizializza OrbitControls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true; // Opzionale, ma fornisce un'esperienza di controllo più fluida
    this.controls.dampingFactor = 0.05;
    this.loadModel();
    this.animate();
    window.addEventListener('keydown', this.onKeyDown.bind(this));
  }

  animate(): void {
    requestAnimationFrame(() => this.animate());
    this.renderer.render(this.scene, this.camera);
  }

  loadModel(): void {
    const loader = new GLTFLoader();
    loader.load(this.modelPath, (gltf) => {
      console.log('gltf: ', gltf)
      this.scene.add(gltf.scene);

      this.setOthers();
      this.updateWindowSize();

    }, undefined, (error) => {
      console.error('An error happened:', error);
    });
  }

  setOthers() {
    // Luce ambientale
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // colore bianco con intensità 0.5
    this.scene.add(ambientLight);

    // Luce direzionale
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // colore bianco con intensità 1
    directionalLight.position.set(0, 1, 1); // posizionamento della luce direzionale
    this.scene.add(directionalLight);

    // Imposta un colore di sfondo per il renderer
    this.renderer.setClearColor(0xeeeeee);
  }


  updateWindowSize() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  // Gestore degli eventi di tastiera
  onKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        // Sposta la camera in avanti
        this.camera.position.z -= 5;
        break;
      case 'ArrowDown':
        // Sposta la camera indietro
        this.camera.position.z += 5;
        break;
      case 'ArrowLeft':
        // Sposta la camera a sinistra
        this.camera.position.x -= 5;
        break;
      case 'ArrowRight':
        // Sposta la camera a destra
        this.camera.position.x += 5;
        break;
    }

    // Aggiorna i controlli Orbit dopo lo spostamento della camera
    this.controls.update();
  }
}
