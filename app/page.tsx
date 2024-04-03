import getGptResponse from './api/gptApi';

export default function Home() {
  const gptResponse = getGptResponse(
    'how does next js .env.locals variables work'
  );

  console.log(gptResponse);

  return <div>{gptResponse}</div>;
}
