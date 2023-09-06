import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Sportage = (props) =>{
    const group = useRef()
    useFrame((state) => {
      // const t = state.clock.getElapsedTime() //시간 다시 되돌리기
      group.current.rotation.y -= 0.005;
    })
    const { nodes, materials } = useGLTF('/kia1/sportage/scene.gltf')
  
    return (
      <group ref={group} {...props} dispose={null}>
        <group ref={group} position={[48.7, -30.142, -76.076]} rotation={[-Math.PI / 2, 0, 0]} scale={0.693}>
          <mesh geometry={nodes.wheel007_Material025_0.geometry} material={materials['Material.025']} />
          <mesh geometry={nodes.wheel007_rimb_0.geometry} material={materials.rimb} />
          <mesh geometry={nodes.wheel007_Material024_0.geometry} material={materials['Material.024']} />
          <mesh geometry={nodes.wheel007_rim_0.geometry} material={materials.material} />
        </group>
        <group position={[-48.7, -30.142, -76.076]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.693}>
          <mesh geometry={nodes.wheel005_Material025_0.geometry} material={materials['Material.025']} />
          <mesh geometry={nodes.wheel005_rimb_0.geometry} material={materials.rimb} />
          <mesh geometry={nodes.wheel005_Material024_0.geometry} material={materials['Material.024']} />
          <mesh geometry={nodes.wheel005_rim_0.geometry} material={materials.material} />
        </group>
        <group position={[-48.7, -30.142, 87.134]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.693}>
          <mesh geometry={nodes.wheel002_Material025_0.geometry} material={materials['Material.025']} />
          <mesh geometry={nodes.wheel002_rimb_0.geometry} material={materials.rimb} />
          <mesh geometry={nodes.wheel002_Material024_0.geometry} material={materials['Material.024']} />
          <mesh geometry={nodes.wheel002_rim_0.geometry} material={materials.material} />
        </group>
        <group position={[-0.069, 5.887, 4.928]} scale={0.01}>
          <mesh geometry={nodes.object020_Material021_0.geometry} material={materials['Material.021']} />
          <mesh geometry={nodes.object020_Material020_0.geometry} material={materials['Material.020']} />
        </group>
        <group position={[-0.057, -6.677, 137.395]} scale={0.01}>
          <mesh geometry={nodes.object014_Material011_0.geometry} material={materials['Material.011']} />
          <mesh geometry={nodes.object014_Material010_0.geometry} material={materials['Material.010']} />
        </group>
        <group position={[-0.038, 7.46, 115.649]} scale={0.01}>
          <mesh geometry={nodes.object006_Material013_0.geometry} material={materials['Material.013']} />
          <mesh geometry={nodes.object006_Material012_0.geometry} material={materials['Material.012']} />
        </group>
        <group position={[48.7, -30.142, 87.134]} rotation={[-Math.PI / 2, 0, 0]} scale={0.693}>
          <mesh geometry={nodes.wheel001_Material025_0.geometry} material={materials['Material.025']} />
          <mesh geometry={nodes.wheel001_rimb_0.geometry} material={materials.rimb} />
          <mesh geometry={nodes.wheel001_Material024_0.geometry} material={materials['Material.024']} />
          <mesh geometry={nodes.wheel001_rim_0.geometry} material={materials.material} />
        </group>
        <mesh geometry={nodes.object005_Material026_0.geometry} material={materials['Material.026']} position={[-0.107, 3.516, 5.16]} scale={0.01} />
        <mesh geometry={nodes.object003_Material019_0.geometry} material={materials['Material.019']} position={[-0.107, 30.193, -13.866]} scale={0.01} />
        <mesh geometry={nodes.wheel006_Material003_0.geometry} material={materials['Material.003']} position={[48.7, -30.142, -76.076]} rotation={[0.34, 0, 0]} scale={0.693} />
        <mesh geometry={nodes.wheel004_Material003_0.geometry} material={materials['Material.003']} position={[-48.7, -30.142, -76.076]} rotation={[0.34, 0, 0]} scale={[-0.693, 0.693, 0.693]} />
        <mesh geometry={nodes.wheel003_Material003_0.geometry} material={materials['Material.003']} position={[-48.7, -30.142, 87.134]} rotation={[-Math.PI / 2, 0, 0]} scale={[-0.693, 0.693, 0.693]} />
        <mesh geometry={nodes.object000_frump_0.geometry} material={materials.frump} position={[-0.057, -6.302, 136.648]} scale={0.01} />
        <mesh geometry={nodes.object027_Material014_0.geometry} material={materials['Material.014']} position={[-0.038, 5.334, 126.238]} scale={0.01} />
        <mesh geometry={nodes.object026_grill2alt_0.geometry} material={materials.grill2alt} position={[-0.057, -6.302, 136.648]} scale={0.01} />
        <mesh geometry={nodes.object024_Material030_0.geometry} material={materials['Material.030']} position={[-0.057, -31.21, -115.081]} scale={0.01} />
        <mesh geometry={nodes.object023_Material009_0.geometry} material={materials['Material.009']} position={[-0.038, 5.918, 121.149]} scale={0.01} />
        <mesh geometry={nodes.object022_Material028_0.geometry} material={materials['Material.028']} position={[-0.061, 39.484, -112.204]} scale={0.01} />
        <mesh geometry={nodes.object021_Material002_0.geometry} material={materials['Material.002']} position={[-0.057, -17.309, -121.588]} scale={0.01} />
        <mesh geometry={nodes.object019_Material015_0.geometry} material={materials['Material.015']} position={[-0.038, 8.397, 112.061]} scale={0.01} />
        <mesh geometry={nodes.object018_Material004_0.geometry} material={materials['Material.004']} position={[-0.038, 8.589, 112.946]} scale={0.01} />
        <mesh geometry={nodes.object017_Material005_0.geometry} material={materials['Material.005']} position={[-0.107, 30.973, -23.589]} scale={0.01} />
        <mesh geometry={nodes.object016_Material029_0.geometry} material={materials['Material.029']} position={[-0.058, -29.622, 5.532]} scale={0.01} />
        <mesh geometry={nodes.object015_Material017_0.geometry} material={materials['Material.017']} position={[-0.108, 3.223, 83.075]} scale={0.01} />
        <mesh geometry={nodes.object013_Material001_0.geometry} material={materials['Material.001']} position={[-0.057, 12.541, -110.985]} scale={0.01} />
        <mesh geometry={nodes.object012_Material027_0.geometry} material={materials['Material.027']} position={[-0.077, 43.895, -35.427]} scale={0.01} />
        <mesh geometry={nodes.object011_Material018_0.geometry} material={materials['Material.018']} position={[-0.107, 13.74, 2.311]} scale={0.01} />
        <mesh geometry={nodes.object009_black_0.geometry} material={materials.black} position={[-0.057, -14.701, 10.455]} scale={0.01} />
        <mesh geometry={nodes.object007_Material016_0.geometry} material={materials['Material.016']} position={[-0.038, 7.621, 115.489]} scale={0.01} />
        <mesh geometry={nodes.object002_Material007_0.geometry} material={materials['Material.007']} position={[-0.107, 3.516, 5.16]} scale={0.01} />
        <mesh geometry={nodes.object001_Material006_0.geometry} material={materials['Material.006']} position={[-0.108, 8.17, 5.882]} scale={0.01} />
        <mesh geometry={nodes.wheel000_Material003_0.geometry} material={materials['Material.003']} position={[48.7, -30.142, 87.134]} rotation={[-Math.PI / 2, 0, 0]} scale={0.693} />
        <mesh geometry={nodes.int_int_0.geometry} material={materials.material_32} position={[4.753, 17.113, 0.958]} rotation={[-Math.PI / 2, 0, 0]} scale={293.937} />
      </group>
    )
  }

  export default Sportage;