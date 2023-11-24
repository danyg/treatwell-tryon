import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'

export const loadHair = (fn) => {
  const loader = new OBJLoader();
  loader.load(
    // resource URL
    "assets/Head01.obj",
    // called when resource is loaded
    function (hair) {
      // scene.add(object);
      hair.scale.x = hair.scale.y = hair.scale.z = 0.03;
      window.hair = hair;
      fn(hair);
    },
    // called when loading is in progresses
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    // called when loading has errors
    function (error) {
      console.log("An error happened");
    }
  );
};
