console.log("123");

import * as THREE from "three";

const scene = new THREE.Scene();

// Option 2: Import just the parts you need.
import { Scene } from "three";

const scene = new Scene();
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const controls = new OrbitControls(camera, renderer.domElement);
