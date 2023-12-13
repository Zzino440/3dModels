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
export class AppComponent implements OnInit {

  isMuted = true; // Flag per gestire lo stato del volume

  videoLoaded = false; // Flag per controllare se il video è stato caricato

  constructor() {

  }

  ngOnInit() {

    const video = document.getElementById('backgroundVideo') as HTMLVideoElement;
    video.volume = this.isMuted ? 0 : 1;
    video.muted = this.isMuted;
    video.addEventListener('loadeddata', () => this.onVideoLoaded());
    video.addEventListener('click', () => this.toggleVolume());

  }

  onVideoLoaded() {
    this.videoLoaded = true;
    this.playVideoWithAudio();
  }

  toggleVolume() {
    if (this.videoLoaded) {
      this.isMuted = !this.isMuted;
      const video = document.getElementById('backgroundVideo') as HTMLVideoElement;
      video.muted = this.isMuted;
      video.volume = this.isMuted ? 0 : 1;
    }
  }
  playVideoWithAudio() {
    const video = document.getElementById('backgroundVideo') as HTMLVideoElement;
    video.play().then(() => {
      this.videoLoaded = true;
      video.muted = this.isMuted;
      video.volume = this.isMuted ? 0 : 1;
    }).catch(error => {
      console.error('Errore durante la riproduzione del video:', error);
    });
  }
}
