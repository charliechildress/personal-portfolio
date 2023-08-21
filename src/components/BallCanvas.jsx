import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  Html,
  useProgress,
} from '@react-three/drei';

const Ball = (props) => {
  console.log(props);
  const [decal] = useTexture([props.imgUrl]);
  const handleClick = () => {
    if (props.link === 'email') {
      window.open(
        'mailto:charlie.t.childress.24@dartmouth.edu',
        '_blank',
        'noopener noreferrer'
      );
    } else {
      window.open(props.link, '_blank');
    }
  };
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.5]} />
      <mesh castShadow scale={3} onClick={handleClick}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#00FFFF'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={0.7}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, link }) => {
  const { progress } = useProgress();
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense
        fallback={
          <Html
            as='div'
            center
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <span className='canvas-loader'></span>
            <p
              style={{
                fontSize: 14,
                color: '#FFFFFF',
                fontWeight: 800,
                marginTop: 40,
              }}
            >
              {progress.toFixed(2)}%
            </p>
          </Html>
        }
      >
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} link={link} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
