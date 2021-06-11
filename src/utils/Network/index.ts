export const fetchJson = (url: string): Promise<Response> =>
  fetch(url).then((res) => res.json());
