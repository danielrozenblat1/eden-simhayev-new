// Images array for Works carousel
export const worksImages = [];
for (let i = 1; i <= 26; i++) {
  // Skip image 13 as it doesn't exist
  if (i === 13) continue;
  worksImages.push(require(`../../assets/shani_works_${i}.webp`));
}
