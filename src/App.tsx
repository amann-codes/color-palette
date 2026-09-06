import { generateHEXPalette } from "./lib"

export default function App() {
  const colors = generateHEXPalette();
  return <div className="flex w-screen h-screen">
    {
      colors.map((c, index) => <ColorBlock bg={c.hex} text={c.textColor} key={index} />)
    }
  </div >

}

function ColorBlock({ bg, text }: { bg: string, text: string }) {
  return (<div style={{ backgroundColor: bg, color: text }} className="flex items-end justify-center h-screen w-full">
    <div className="text-3xl font-bold mb-10 uppercase">
      {bg}
    </div>
  </div>
  )
}