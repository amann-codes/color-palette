import { useEffect, useState } from "react";

export default function Toast({ show, close, color, textColor }: { show: boolean, close: () => void, color: string, textColor: string }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (show) {
            setVisible(true)
        }
        const timer = setTimeout(() => {
            setTimeout(() => close(), 300)
            setVisible(false)
        }, 3000)
        return () => clearTimeout(timer)
    }, [show])

    return <div style={{ backgroundColor: `${color}80`, color: textColor, borderColor: color }} className={`fixed top-4 right-4 border rounded-md transition-transform transform ease-in-out duration-300 p-4 bg-white text-black ${show ? "block" : "hidden"} ${visible ? "translate-x-0" : "translate-x-full"}`}>
        <div>
            Copied to clipboard!
        </div>
    </div>
}