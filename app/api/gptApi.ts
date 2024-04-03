import OpenAI from 'openai';

export default async function getGptResponse(query: string) {
  const openai = new OpenAI();
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: query,
      },
    ],
    model: 'gpt-3.5-turbo',
  });

  console.log(completion.choices[0]);
  return completion.choices[0].message.content;
}
