import { MathUtils } from 'three';


export default function Particles(count) {
  return Array.from({ length: count }, () => ({
    factor: MathUtils.randInt(20, 100),
    speed: MathUtils.randFloat(0.03, 1),
    xFactor: MathUtils.randFloatSpread(80),
    yFactor: MathUtils.randFloatSpread(40),
    zFactor: MathUtils.randFloatSpread(40),

  }))
}