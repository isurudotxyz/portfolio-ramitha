export function getStripTarget(index, thumbRect, vh, { gap, scale }) {
  const { left, bottom, width, height } = thumbRect;
  const slotWidth = width * scale + gap;

  const x = gap - left - (width * (1 - scale)) / 2 + index * slotWidth;
  const y = vh - gap - bottom + (height * (1 - scale)) / 2;

  return { x, y, scale };
}