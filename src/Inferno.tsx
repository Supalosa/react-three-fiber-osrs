import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { Mesh } from "three";

export default function Inferno() {
  const gltf = useGLTF("Zuk.glb");
  const animations = useAnimations(gltf.animations);

  const node1 = Object.keys(gltf.nodes)[0];
  const material1 = Object.keys(gltf.materials)[0];

  const mesh = gltf.nodes[node1] as Mesh;

  useEffect(() => {
    const { mixer } = animations;
    const anims = gltf.animations.map((animation) => {
      const action = mixer.clipAction(animation);
      action.clampWhenFinished = true;
      action.zeroSlopeAtEnd = false;
      action.zeroSlopeAtStart = false;
      return action;
    });
    anims[0].play();
  }, []);

  return (
    <group>
      <mesh
        geometry={mesh.geometry}
        material={gltf.materials[material1]}
        morphTargetInfluences={mesh.morphTargetInfluences}
      />
    </group>
  );
}
