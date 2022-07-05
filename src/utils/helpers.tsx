export const fetcher = (url: string) => fetch(url).then(res => res.json());

export const getRandomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
