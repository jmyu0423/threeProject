import './index.css';

import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import Sportage from './component/Sportage';
import Lightformers from './component/Lightformers';

function App() {
 
  const [mesh,setMesh] = useState("#ffffff")
  const [stripes,setStripes] = useState("#ffffff")
  const [soul,setSoul] = useState("#ffffff")

  return (
    <div>
        <div className="wrapper">
            <div className="card">
                <div className="product-canvas">
                   <Canvas camera={{position: [200, 0, 100]}}>
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
                          <Sportage rotation={[0, 0, 0]} customColors={{mesh:mesh, stripes:stripes , soul:soul }}/>
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
                <h2>KIA</h2>
                <div className='colors'>
                    <div>
                        <input type="color" id="mesh" name="mesh"
                              value={mesh} 
                              onChange={(e) => setMesh(e.target.value)}/>
                        <label htmlFor="mesh">Main</label>
                      </div>

                    <div>
                        <input type="color" id="stripes" name="stripes"
                                value= {stripes}
                                onChange={(e) => setStripes(e.target.value)}/>
                        <label htmlFor="stripes">Stripes</label>
                    </div>
                    <div>
                        <input type="color" id="soul" name="soul"
                                value={soul} 
                                onChange={(e) => setSoul(e.target.value)}/>
                        <label htmlFor="soul">Soul</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;