export const fetcher = (url: string) => fetch(url).then(res => res.json()).catch(console.error);

export const getRandomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
