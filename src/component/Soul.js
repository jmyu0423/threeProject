import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Soul = (props) =>{
  const group = useRef()
  useFrame((state) => {
    // const t = state.clock.getElapsedTime() //시간 다시 되돌리기
    group.current.rotation.y -= 0.005;
  })
  const { nodes, materials } = useGLTF('/kia1/soul/scene.gltf')

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.Standard03FF55} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

export default Soul;