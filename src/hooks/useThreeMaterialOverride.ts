import { useEffect } from "react";
import * as THREE from "three";
import type { Group } from "three";

export type MaterialOverride = {
  meshName: string;
  material: THREE.Material;
};

export const useThreeMaterialOverride = (
  scene: Group,
  overrides: MaterialOverride[],
): void => {
  useEffect(() => {
    scene.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;

      const override = overrides.find((o) => o.meshName === child.name);
      if (override) {
        child.material = override.material;
      }
    });
  }, [scene, overrides]);
};

// NOTE: this hook does not restore original materials on cleanup.
// Suitable for static overrides only.
