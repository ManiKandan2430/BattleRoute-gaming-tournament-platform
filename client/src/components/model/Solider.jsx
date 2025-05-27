import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Solider(props) {
  const group = useRef();
  const { nodes, materials, animations, scene } = useGLTF(
    "/model/solider.glb"
  );
  const { actions } = useAnimations(animations, group);

  // Set custom mesh colors (override default textures)
  useEffect(() => {
    if (materials?.Armor) materials.Armor.color.set("#EFF3EA"); // Red armor
    if (materials?.Body) materials.Body.color.set("#670D2F"); // Dark grey body
    if (materials?.AssaultRifle) materials.AssaultRifle.color.set("#F3C623"); // Light rifle
  }, [materials]);

  // Play the first animation
  useEffect(() => {
    if (group.current && actions && Object.keys(actions).length > 0) {
      const firstAction = Object.values(actions)[0];
      firstAction.reset().play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.Armor} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Body} />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.AssaultRifle}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/model/solider.glb");
