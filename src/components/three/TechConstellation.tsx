import { Suspense, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { techClusters } from "@/data/content";
import { useTheme } from "@/lib/theme";

const CLUSTER_POS: Record<string, [number, number, number]> = {
  frontend: [-4, 1.4, 0],
  backend: [-1.4, -1.4, 1.2],
  data: [1.6, 1.6, -1],
  comm: [3.6, -0.4, 0.8],
  systems: [0.2, 2.2, -1.6],
};

const CLUSTER_COLOR: Record<string, string> = {
  frontend: "#00e58a",
  backend: "#6fe6ff",
  data: "#7bffb6",
  comm: "#00e58a",
  systems: "#c084fc",
};

function TechNode({
  label,
  position,
  color,
  active,
  dimmed,
  onHover,
  onLeave,
}: {
  label: string;
  position: [number, number, number];
  color: string;
  active: boolean;
  dimmed: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { resolved } = useTheme();
  const dark = resolved === "dark";

  useFrame(() => {
    if (!meshRef.current) return;
    const target = hovered || active ? 1.35 : 1;
    meshRef.current.scale.lerp(new THREE.Vector3(target, target, target), 0.1);
  });

  const labelTex = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 512;
    c.height = 128;
    const ctx = c.getContext("2d")!;
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillStyle = dark ? "#f0f4fa" : "#0a0d12";
    ctx.font = "600 60px 'JetBrains Mono', monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(label, c.width / 2, c.height / 2);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 8;
    return t;
  }, [label, dark]);

  const opacity = dimmed ? 0.15 : 1;

  return (
    <group
      position={position}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        onHover();
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        onLeave();
        document.body.style.cursor = "";
      }}
    >
      <Float speed={0.9} rotationIntensity={0.2} floatIntensity={0.4}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[0.28, 1]} />
          <meshPhysicalMaterial
            color={dark ? "#0a0d12" : "#ffffff"}
            emissive={color}
            emissiveIntensity={hovered || active ? 1.2 : 0.35}
            transmission={0.4}
            thickness={0.5}
            roughness={0.15}
            metalness={0.2}
            transparent
            opacity={opacity}
            ior={1.5}
          />
        </mesh>
        <mesh scale={[1.55, 1.55, 1.55]}>
          <icosahedronGeometry args={[0.28, 0]} />
          <meshBasicMaterial
            color={color}
            wireframe
            transparent
            opacity={(hovered || active ? 0.5 : 0.18) * opacity}
          />
        </mesh>
        <mesh position={[0, -0.5, 0]}>
          <planeGeometry args={[1.1, 0.28]} />
          <meshBasicMaterial map={labelTex} transparent opacity={opacity} />
        </mesh>
      </Float>
    </group>
  );
}

function ClusterHub({
  position,
  color,
  active,
}: {
  position: [number, number, number];
  color: string;
  active: boolean;
}) {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.12, 24, 24]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={active ? 3 : 1.4}
        />
      </mesh>
      <mesh scale={active ? 3.2 : 2.4}>
        <sphereGeometry args={[0.12, 24, 24]} />
        <meshBasicMaterial color={color} transparent opacity={active ? 0.12 : 0.05} />
      </mesh>
    </group>
  );
}

function Constellation({
  activeCluster,
  setActiveCluster,
}: {
  activeCluster: string | null;
  setActiveCluster: (id: string | null) => void;
}) {
  const nodePositions = useMemo(() => {
    const map: Record<string, { pos: [number, number, number]; cluster: string; color: string }[]> = {};
    techClusters.forEach((cluster) => {
      const hub = CLUSTER_POS[cluster.id];
      const color = CLUSTER_COLOR[cluster.id];
      map[cluster.id] = cluster.items.map((_it, i) => {
        const angle = (i / cluster.items.length) * Math.PI * 2;
        const radius = 1.05 + (i % 2) * 0.15;
        const pos: [number, number, number] = [
          hub[0] + Math.cos(angle) * radius,
          hub[1] + Math.sin(angle) * radius * 0.85,
          hub[2] + Math.sin(angle * 1.2) * 0.4,
        ];
        return { pos, cluster: cluster.id, color };
      });
    });
    return map;
  }, []);

  const rotationRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (rotationRef.current) {
      rotationRef.current.rotation.y = clock.elapsedTime * 0.04;
    }
  });

  return (
    <group ref={rotationRef}>
      {techClusters.map((cluster) => {
        const hub = CLUSTER_POS[cluster.id];
        const color = CLUSTER_COLOR[cluster.id];
        const isActive = activeCluster === cluster.id;
        const dimmed = activeCluster !== null && !isActive;
        return (
          <group key={cluster.id}>
            <ClusterHub position={hub} color={color} active={isActive} />
            {nodePositions[cluster.id].map((n, i) => {
              const item = cluster.items[i];
              return (
                <group key={item.name}>
                  <Line
                    points={[new THREE.Vector3(...hub), new THREE.Vector3(...n.pos)]}
                    color={color}
                    lineWidth={0.5}
                    transparent
                    opacity={dimmed ? 0.05 : isActive ? 0.55 : 0.22}
                  />
                  <TechNode
                    label={item.name}
                    position={n.pos}
                    color={color}
                    active={isActive}
                    dimmed={dimmed}
                    onHover={() => setActiveCluster(cluster.id)}
                    onLeave={() => setActiveCluster(null)}
                  />
                </group>
              );
            })}
          </group>
        );
      })}
    </group>
  );
}

export function TechConstellation({
  activeCluster,
  setActiveCluster,
}: {
  activeCluster: string | null;
  setActiveCluster: (id: string | null) => void;
}) {
  const { resolved } = useTheme();
  const dark = resolved === "dark";
  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0.6, 10], fov: 45 }}
      data-cursor="scene"
    >
      <color attach="background" args={[dark ? "#05070a" : "#eef1f5"]} />
      <fog attach="fog" args={[dark ? "#05070a" : "#eef1f5", 10, 24]} />
      <ambientLight intensity={dark ? 0.4 : 0.7} />
      <pointLight position={[6, 6, 6]} intensity={dark ? 30 : 10} color={"#ffffff"} distance={30} decay={2} />
      <pointLight position={[-6, -3, 3]} intensity={dark ? 20 : 6} color={"#00e58a"} distance={20} decay={2} />
      <pointLight position={[3, -4, -4]} intensity={dark ? 15 : 5} color={"#6fe6ff"} distance={20} decay={2} />

      <Suspense fallback={null}>
        <Constellation activeCluster={activeCluster} setActiveCluster={setActiveCluster} />
      </Suspense>

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={7}
        maxDistance={14}
        autoRotate={false}
        rotateSpeed={0.6}
      />
    </Canvas>
  );
}
