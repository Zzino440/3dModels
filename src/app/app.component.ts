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
  modelPath = "assets/Architecture/Architecture.glb"
  modelPath2= "assets/IFC_Architecture.glb"
  modelPath3="assets/MEP.glb"
  modelPaths = [this.modelPath]; // Array dei percorsi dei modelli


  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  selectedObject: THREE.Object3D | null = null;

  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(50, 50, 200); // Imposta la camera più lontana
    this.renderer = new THREE.WebGLRenderer({antialias: true});
  }

  ngOnInit() {

  }


  ngAfterViewInit() {
    //inizializzo renderer
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.canvasRef.nativeElement.appendChild(this.renderer.domElement);

    // Inizializza OrbitControls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true; // Opzionale, ma fornisce un'esperienza di controllo più fluida
    this.controls.dampingFactor = 0.05;


    this.loadModel();
    this.animate();
    window.addEventListener('keydown', this.onKeyDown.bind(this));

    // Configura lo zoom
    this.controls.enableZoom = true; // Abilita lo zoom
    this.controls.zoomSpeed = 1.0; // Regola la velocità di zoom

    //change the center of the 3d world on mouse click
/*    this.renderer.domElement.addEventListener('click', this.onMouseClick.bind(this), false);*/
  }

  animate(): void {
    requestAnimationFrame(() => this.animate());
    this.renderer.render(this.scene, this.camera);
  }

  loadModel(): void {
    const loader = new GLTFLoader();

    for (const path of this.modelPaths) {
      loader.load(path, (gltf) => {
        console.log('gltf: ', gltf);
        let object = gltf.scene;
        console.log('object:',object)
        this.scene.add(object);
        this.setOthers();
      }, undefined, (error) => {
        console.error('An error happened:', error);
      });
    }

    this.updateWindowSize();
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

  onMouseClick(event: MouseEvent) {
    // Calcola la posizione del mouse nel sistema di coordinate normalizzato
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Aggiorna il raycaster con la posizione del mouse
    this.raycaster.setFromCamera(this.mouse, this.camera);

    // Calcola gli oggetti che intersecano il raggio dal raycaster
    const intersects = this.raycaster.intersectObjects(this.scene.children, true);

    if (intersects.length > 0) {
      const pointOfInterest = intersects[0].point; // Punto di intersezione con l'oggetto più vicino

      // Imposta questo punto come nuovo target per OrbitControls
      this.controls.target.set(pointOfInterest.x, pointOfInterest.y, pointOfInterest.z);
      this.controls.update();
    }
  }
}
