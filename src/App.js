import './index.css';

import { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, Environment,  } from '@react-three/drei'
import Sportage from './component/Sportage';
import Soul from './component/Soul';
import Lightformers from './component/Lightformers';

function App() {
  const [selectCar, setSelectCar] = useState("Sportage");

  const Car = () =>{
    if(selectCar === "Sportage"){
      return <Sportage rotation={[0, 0, 0]}/>
    }else if(selectCar === "Soul"){
      return <Soul rotation={[0, 2, 0]} position={[0, -20, 0]}/>
    }
  }

  const Camera = () =>{
    const { camera } = useThree();
    if(selectCar === "Sportage"){
      camera.position.set(200, 0, 100);
    }else{
      camera.position.set(100, 0, 50);
    }
  }

  const changeCar = (name) =>{
    setSelectCar(name)
  }

  return (
    <div>
        <div className="wrapper">
            <div className="card">
                <div className="product-canvas">
                   <Canvas>
                      <Camera/>
                      <Suspense fallback={null}>
                          <ambientLight 
                            intensity={0.5}
                          />
                          <pointLight
                            position={[10, 10, 10]}
                            intensity={1}
                          />
                          <directionalLight
                            position={[0, 10, 0]}
                            intensity={3}
                          />
                          <spotLight
                            intensity={2} 
                            angle={0.3} 
                            penumbra={1} 
                            position={[0,15,0]}
                            castShadow 
                            shadow-bias={-0.0001}
                          />
                          <Car/>

                          <OrbitControls
                            enablePan={true}
                            enableZoom={true}
                            enableRotate={true}
                          />
                          <Environment frames={Infinity} resolution={256} background blur={1}>
                            <Lightformers />
                          </Environment>
                      </Suspense>
                   </Canvas>
                </div>
                <h2>Car</h2>
                <div className='colors'>
                    <div>
                      <button onClick={(e)=>changeCar(e.target.value)} value={'Sportage'}>Sportage</button>
                    </div>

                    <div>
                      <button onClick={(e)=>changeCar(e.target.value)} value={'Soul'}>Soul</button>
                    </div>

                    {/* <div>
                      <button>Soul</button>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;