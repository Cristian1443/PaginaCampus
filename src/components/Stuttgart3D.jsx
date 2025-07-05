// src/components/Stuttgart3D.jsx
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage } from '@react-three/drei';

function Model(props) {
  // Carga el modelo 3D. Asegúrate que la ruta al archivo es correcta.
  const { scene } = useGLTF('../../public/assets/img/imagenes/robot.jpeg');
  return <primitive object={scene} {...props} />;
}

export default function Stuttgart3D() {
  return (
    <div style={{ width: '100%', height: '400px', cursor: 'grab' }}>
      <Canvas dpr={[1, 2]} camera={{ fov: 45 }}>
        <Stage environment="city" intensity={0.6}>
          <Model scale={0.8} />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
}