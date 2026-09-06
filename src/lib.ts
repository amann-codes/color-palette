function generateRange0to360() {
    return Number(Math.round(Math.random() * 361))
}

function generateRange0to60() {
    return Number(Math.round(Math.random() * 60))
}

type RGB = {
    r: number
    g: number
    b: number
}

function convertHSLtoRGBtoHEX(h: number, s: number, l: number) {
    const normalizedSaturation = s / 100;
    const normalizedLightness = l / 100;
    const chroma = (1 - Math.abs(2 * normalizedLightness - 1)) * normalizedSaturation
    const x = chroma * (1 - Math.abs(((h / 60) % 2) - 1))
    let rgb: RGB;
    if (h < 60) {
        rgb = {
            r: chroma, g: x, b: 0
        }
    }
    else if (h < 120) {
        rgb = {
            r: x, g: chroma, b: 0
        }
    }
    else if (h < 180) {
        rgb = {
            r: 0, g: chroma, b: x
        }
    }
    else if (h < 240) {
        rgb = {
            r: 0, g: x, b: chroma
        }
    }
    else {
        rgb = {
            r: chroma, g: 0, b: x
        }
    }
    const m = normalizedLightness - (chroma / 2)
    rgb = {
        r: Number(((rgb.r + m) * 255).toFixed()),
        g: Number(((rgb.g + m) * 255).toFixed()),
        b: Number(((rgb.b + m) * 255).toFixed())
    }
    const hex = `#${(rgb.r).toString(16)}${(rgb.g).toString(16)}${(rgb.b).toString(16)}`
    return hex
}

export function generateHEXPalette(): string[] {
    const hue = generateRange0to360()
    const saturation = generateRange0to60();
    const lightness = generateRange0to60();

    let colors: string[] = [];
    for (let i = 0; i < 5; i++) {
        colors.push(convertHSLtoRGBtoHEX(hue, saturation + i * 10, lightness + i * 10))
    }
    return colors
}