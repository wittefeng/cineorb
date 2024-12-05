const calculateElementBetween = (pageWidth: number): number => {
  const effectiveWidth = Math.min(pageWidth * 0.95, 1278)
  const elementCount = Math.floor(effectiveWidth / 246)
  const validCount = elementCount === 0 ? 1 : elementCount
  const remainingWidth = effectiveWidth - validCount * 248
  const interval = validCount > 1 ? remainingWidth / (validCount - 1) : 0
  return interval
}
export { calculateElementBetween }
