import { useState } from "react";
import Toast from "./Toast";

export function ColorBlock({ bg, text }: { bg: string, text: string }) {

    const handleOnClick = () => {
        setShowToast(true)
        navigator.clipboard.writeText(bg)
    }

    const [showToast, setShowToast] = useState(false);
    return (
        <div onClick={handleOnClick} style={{ backgroundColor: bg, color: text }} className="flex items-end cursor-pointer justify-center h-screen w-full" >
            <div className="text-3xl font-bold mb-10 uppercase">
                {bg}
            </div>
            <Toast show={showToast} close={() => setShowToast(false)} color={bg} textColor={text} />
        </div >
    )
}