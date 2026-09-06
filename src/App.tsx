import { generateHEXPalette } from "./lib"

export default function App() {
  const colors = generateHEXPalette();
  return <div className="flex w-screen h-screen">
    {
      colors.map((c, index) => <ColorBlock color={c} key={index} />)
    }
  </div >

}

function ColorBlock({ color }: { color: string }) {
  return (
    <div style={{ backgroundColor: color }} className="h-screen w-full" />
  )
}