import type { ObjectMap } from "@react-three/fiber";
import type { Mesh } from "three";
import type { GLTF } from "three-stdlib";

export type GLTFType = Omit<GLTF & ObjectMap, "nodes"> & {
  nodes: { [name: string]: Mesh };
};
