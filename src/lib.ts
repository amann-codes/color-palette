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

function getTextColor(rgb: RGB) {
    let redChannel = rgb.r / 255;
    if (redChannel <= 0.04045) {
        redChannel = redChannel / 12.92
    }
    else {
        redChannel = ((redChannel + 0.055) / 1.055) ** 2.4
    }
    let greenChannel = rgb.g / 255;
    if (greenChannel <= 0.04045) {
        greenChannel = greenChannel / 12.92
    }
    else {
        greenChannel = ((greenChannel + 0.055) / 1.055) ** 2.4
    }
    let blueChannel = rgb.b / 255;
    if (blueChannel <= 0.04045) {
        blueChannel = blueChannel / 12.92
    }
    else {
        blueChannel = ((blueChannel + 0.055) / 1.055) ** 2.4
    }
    const luminance = 0.2126 * redChannel + 0.7152 * greenChannel + 0.0722 * blueChannel;
    const whiteContrast = (1.0 + 0.05) / (luminance + 0.05)
    const blackContrast = (luminance + 0.05) / (0.0 + 0.05)

    let textColor = '#fff';
    if (whiteContrast > blackContrast) {
        return textColor;
    }
    else {
        textColor = '#000'
        return textColor;
    }

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
    else if (h < 300) {
        rgb = {
            r: x, g: 0, b: chroma
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
    const textColor = getTextColor(rgb);
    let redHex = rgb.r.toString(16)
    let greenHex = rgb.g.toString(16)
    let blueHex = rgb.b.toString(16)
    if (redHex.length === 1) {
        redHex = "0" + redHex
    }
    if (greenHex.length === 1) {
        greenHex = "0" + greenHex
    }
    if (blueHex.length === 1) {
        blueHex = "0" + blueHex
    }
    const hex = "#" + redHex + greenHex + blueHex
    return { hex, textColor }
}

export function generateHEXPalette() {
    const hue = generateRange0to360()
    const saturation = generateRange0to60();
    const lightness = generateRange0to60();

    let colors = [];
    for (let i = 0; i < 5; i++) {
        colors.push(convertHSLtoRGBtoHEX(hue, saturation + i * 10, lightness + i * 10))
    }
    return colors
}