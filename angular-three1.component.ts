import { Component, OnInit, AfterViewInit, ElementRef, Input, ViewChild } from '@angular/core';
import * as THREE from 'three';


@Component({
  selector: 'app-angular-three1',
  templateUrl: './angular-three1.component.html',
  styleUrls: ['./angular-three1.component.css']
})
export class AngularThree1Component implements OnInit, AfterViewInit {

  @ViewChild('canvas')
  private canvasRef!: ElementRef;

  //* model properties
  @Input() public rotationSpeedX: number = 0.02;
  @Input() public rotationSpeedY: number = 0.01;
  @Input() public size: number = 70;
  @Input() public texture: string = "/assets/earlvalley.jpg";

  //* canvas properties
  @Input() public cameraZ: number = 110;
  @Input() public fieldOfView: number = 1;
  @Input('nearClipping') public nearClippingPlane: number = 1;
  @Input('farClipping') public farClippingPlane: number = 1000;

  //* camera properties
  private camera!: THREE.PerspectiveCamera;
  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private loader = new THREE.TextureLoader();
  private geometry = new THREE.BoxGeometry(1,1,1);
  private material = new THREE.MeshBasicMaterial({ map: this.loader.load(this.texture)});

  private model: THREE.Mesh = new THREE.Mesh(this.geometry, this.material);

  private renderer!: THREE.WebGL1Renderer;

  private scene!: THREE.Scene;

   //* scene setup
  private createScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000)
    this.scene.add(this.model);
    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPlane,
      this.farClippingPlane
    )
    this.camera.position.z = this.cameraZ;
  }

  getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  private animateModel() {
    this.model.rotation.x += this.rotationSpeedX;
    this.model.rotation.y += this.rotationSpeedY;
  }

  //* renderer
  private startRenderingLoop() {
    this.renderer = new THREE.WebGL1Renderer({ canvas: this.canvas});
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    let component: AngularThree1Component = this;
    (function render() {
      requestAnimationFrame(render);
      component.animateModel();
      component.renderer.render(component.scene, component.camera);
    }());
  }

  constructor() { }
  ngAfterViewInit(){
    this.createScene();
    this.startRenderingLoop();
  }

  ngOnInit(): void {
  }

}
