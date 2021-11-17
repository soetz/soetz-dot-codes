import {
  Camera,
  Mesh,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  Vector2,
  Vector3,
  WebGLRenderer,
} from "three";
import { FragmentShaderUniform, fragmentShader, vertexShader } from "./shader";

interface MyScene {
  scene: Scene;
  renderer: WebGLRenderer;
  meshes: { shaderWall: Mesh };
  camera: Camera;
  uniforms: FragmentShaderUniform;
}

const createScene = (
  canvas: HTMLCanvasElement,
  backgroundColor: Vector3,
  primaryColor: Vector3,
  secondaryColor: Vector3
): MyScene => {
  const canvasSize = new Vector2(canvas.clientWidth, canvas.clientHeight);
  const pixelRatio = Math.min(window.devicePixelRatio, 2);

  const uniforms = {
    u_time: { type: "f", value: 1.0 },
    u_resolution: {
      type: "v2",
      value: new Vector2(canvasSize.x / pixelRatio, canvasSize.y / pixelRatio),
    },
    u_background_color: {
      type: "v3",
      value: backgroundColor,
    },
    u_primary_color: {
      type: "v3",
      value: primaryColor,
    },
    u_secondary_color: {
      type: "v3",
      value: secondaryColor,
    },
  };

  const scene = new Scene();

  const shaderWall = new Mesh(
    new PlaneGeometry(2, 2),
    new ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
    })
  );
  scene.add(shaderWall);

  const camera = new PerspectiveCamera(
    50,
    canvasSize.x / canvasSize.y,
    0.1,
    2000
  );
  scene.add(camera);

  const renderer = new WebGLRenderer({
    canvas,
  });
  renderer.setSize(canvasSize.x, canvasSize.y, false);
  renderer.setPixelRatio(pixelRatio);

  return {
    scene,
    renderer,
    meshes: { shaderWall },
    camera,
    uniforms,
  };
};

export { MyScene, createScene };
