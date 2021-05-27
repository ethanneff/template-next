export const fetchJson = (url: string) => fetch(url).then((res) => res.json());
