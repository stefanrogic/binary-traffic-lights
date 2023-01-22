const API_URL = "https://www.random.org/integers/?num=1&min=0&max=255&col=1&base=10&format=plain&rnd=new";

export const fetchNewNumber = () => {
  return fetch(API_URL).then((res) => res.json());
};
