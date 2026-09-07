import { generateHEXPalette } from "./lib"
import { ColorBlock } from "./colorBlock";

export default function App() {
  const colors = generateHEXPalette();

  return <div className="flex w-screen h-screen">
    {
      colors.map((c, index) => <ColorBlock bg={c.hex} text={c.textColor} key={index} />)
    }
  </div >

}
