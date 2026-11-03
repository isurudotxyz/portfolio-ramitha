// Clamp to the 0..1 range.
export const clamp = (t) => Math.min(1, Math.max(0, t));

export const lerp = (a, b, t) => a + (b - a) * t;

export const expoInOut = (t) => {
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  return t < 0.5
    ? Math.pow(2, 20 * t - 10) / 2
    : (2 - Math.pow(2, -20 * t + 10)) / 2;
};
