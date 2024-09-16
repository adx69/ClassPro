function shuffleArray(array: (string | undefined)[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const urls = [
  process.env.NEXT_PUBLIC_API_URL_MORN,
  process.env.NEXT_PUBLIC_API_URL_EVEN,
  process.env.NEXT_PUBLIC_API_URL_NIGHT,
  process.env.NEXT_PUBLIC_API_URL_2,
  process.env.NEXT_PUBLIC_API_URL_H,
  process.env.NEXT_PUBLIC_API_URL,
];

export function getAllUrls() {
  return shuffleArray(urls);
}

export function getUrl() {
  const rand = Math.floor(Math.random() * urls.length);

  return urls[rand] || process.env.NEXT_PUBLIC_API_URL_H;
}

export const revalUrl = process.env.NEXT_PUBLIC_API_URL;
