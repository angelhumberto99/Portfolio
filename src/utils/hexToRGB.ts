export const hexToRGB = (color: string): string => {
  const hexColor: string = color.replace("#", "")
  const r = parseInt(hexColor.slice(0, 2), 16)
  const g = parseInt(hexColor.slice(2, 4), 16)
  const b = parseInt(hexColor.slice(4, 6), 16)
  return `${r}, ${g}, ${b}`
}