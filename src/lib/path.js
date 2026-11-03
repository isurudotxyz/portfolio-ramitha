import { clamp } from "./easing.js";

export function sampleSpline(points, t) {
  const segments = points.length - 1;
  const f = clamp(t) * segments;
  const i = Math.min(Math.floor(f), segments - 1);
  const u = f - i;

  const p0 = points[Math.max(i - 1, 0)];
  const p1 = points[i];
  const p2 = points[i + 1];
  const p3 = points[Math.min(i + 2, points.length - 1)];

  return p1.map(
    (_, k) =>
      0.5 *
      (2 * p1[k] +
        (-p0[k] + p2[k]) * u +
        (2 * p0[k] - 5 * p1[k] + 4 * p2[k] - p3[k]) * u * u +
        (-p0[k] + 3 * p1[k] - 3 * p2[k] + p3[k]) * u * u * u),
  );
}
