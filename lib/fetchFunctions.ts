// pass in a string and it will get sent to the api route
// returns a promise that resolves to the api response
export const fetchGptResponse = async (userQuery: string) => {
  const res = await fetch('/gptApi', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: userQuery }),
  });
  return res.json();
};
