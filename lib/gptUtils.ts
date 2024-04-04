import OpenAI from 'openai';
// takes in a query to send to gpt model, returns promise that resolves to the model's response
export async function getGptResponse(query: string): Promise<string> {
  // Important: need to add your openAI api key in a .env.locals file
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: query,
      },
    ],
    model: 'gpt-3.5-turbo',
  });

  if (!completion.choices[0].message.content)
    return 'something went wrong with getting data from the openAI API call';

  return completion.choices[0].message.content;
}
