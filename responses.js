require('dotenv').config();
const api_key = process.env.OPENAI_API_KEY;

// import { Configuration, OpenAIApi } from 'openai';

// const config = new Configuration({
//     apiKey: api_key
// });

// const openai = new OpenAIApi(config);


async function getCompletionFromMessages( messages, model = 'gpt-3.5-turbo', temperature = 0 ) {
    console.log('clicked');
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${api_key}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: model,
            messages: messages,
            maxTokens: 200,
            temperature: temperature
        })
    }
    try {
        const completion = await fetch("https://api.openai.com/v1/chat/completions", options)
        const data = await completion.json();
        console.log(data);
        return data.choices[0].message.content.text;
    } catch(error) {
        console.log(error);
        console.log("Something went wrong.")
    }
};