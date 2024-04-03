import OpenAI from 'openai';
// takes in a query to send to gpt model, returns promise that resolves to the model's response
export async function getGptResponse(query: string): Promise<string> {
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
  console.log(completion.choices[0]);
  return completion.choices[0].message.content;
}
