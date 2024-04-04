import { getGptResponse } from '../../lib/gptUtils';

export async function GET(request: Request) {
  return Response.json({
    msg: 'hello, make sure you sending a POST request with a user query to ping the open ai api',
  });
}

// accepts a user query and return promise that resolves to api response
export async function POST(request: Request, response: Response) {
  const body = await request.json();
  console.log('body: ', body);
  const gptResponse = await getGptResponse(body.query);
  return Response.json({ msg: gptResponse });
}
