import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { Mesh } from "three";

export default function Inferno() {
  const gltf = useGLTF("Zuk.glb");
  const { mixer } = useAnimations(gltf.animations, gltf.scene);

  const node1 = Object.keys(gltf.nodes)[0];
  const material1 = Object.keys(gltf.materials)[0];

  const mesh = gltf.nodes[node1] as Mesh;

  useEffect(() => {
    const anims = gltf.animations.map((animation) => {
      const action = mixer.clipAction(animation);
      action.clampWhenFinished = true;
      action.zeroSlopeAtEnd = false;
      action.zeroSlopeAtStart = false;
      return action;
    });
    anims[0].play();
  }, [mixer, gltf.animations]);

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
