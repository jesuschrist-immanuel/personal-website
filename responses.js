require('dotenv').config();
const api_key = process.env.OPENAI_API_KEY;

export async function getCompletionFromMessages(
  messages,
  model = "gpt-4",
  temperature = 0
) {
  const options = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${api_key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: model,
      messages: messages,
      temperature: temperature,
    }),
  };
  try {
    const completion = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await completion.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.log(error);
  }
}
