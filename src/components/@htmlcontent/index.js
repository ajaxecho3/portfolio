import { Html } from '@react-three/drei'
import { useRef } from 'react'


export const HtmlContent = ({ children }) => {
  const ref = useRef()
  return (
    <group ref={ref} >
      <Html fullscreen>
        {children}
      </Html>
    </group>
  )
}
