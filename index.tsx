// projects/sphere/index.tsx
import Scene from "./components/Scene" // 相対パスに修正
import "../projects/sphere/app/globals.css" // 必要なら読み込み（後述）

export default function SphereProject() {
  return (
    <div className="w-full h-full">
      <Scene />
    </div>
  )
}
