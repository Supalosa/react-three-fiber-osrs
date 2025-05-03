import { Canvas } from "@react-three/fiber";
import { Environment, Grid, OrbitControls, Stage } from "@react-three/drei";

import Inferno from "./Inferno";

import "./App.css";


function App() {
  const display = false;
  return (
    <div className="canvas-container">
      <Canvas flat shadows camera={{ position: [-15, 0, 10], fov: 25 }}>
        <OrbitControls makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
        <Stage
          intensity={0.5}
          environment="city"
          shadows={{ type: "accumulative", bias: -0.001, intensity: Math.PI }}
          adjustCamera={false}
        >
          <Inferno />
        </Stage>
        <Grid
          renderOrder={-1}
          position={[0, -1.85, 0]}
          infiniteGrid
          cellSize={0.6}
          cellThickness={0.6}
          sectionSize={3.3}
          sectionThickness={1.5}
          sectionColor="black"
          fadeDistance={30}
        />
        <Environment background preset="sunset" blur={0.8} />
      </Canvas>
    </div>
  );
}

export default App;
