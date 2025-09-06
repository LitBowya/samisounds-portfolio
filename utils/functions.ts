export const lightenColor = (hex: string, percent: number)=> {
    const num = parseInt(hex.replace("#", ""), 16);
    const r = Math.min(255, (num >> 16) + 255 * (percent / 100));
    const g = Math.min(255, ((num >> 8) & 0x00ff) + 255 * (percent / 100));
    const b = Math.min(255, (num & 0x0000ff) + 255 * (percent / 100));
    return `rgb(${r}, ${g}, ${b})`;
}
