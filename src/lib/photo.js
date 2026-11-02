const PHOTOS = 15;

export const photos = Array.from({ length: PHOTOS }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    id: n,
    src: `/images/photo-${n}.svg`,
    alt: `Placeholder portrait ${n}`,
    caption: `${n} — Some Text`,
  };
});
