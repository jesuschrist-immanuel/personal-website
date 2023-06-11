const fs = require('fs');

require('dotenv').config();
const api_key = process.env.OPENAI_API_KEY;

import { Configuration, OpenAIApi } from 'openai';

const config = new Configuration({
    apiKey: api_key
});

const openai = new OpenAIApi(config);


export const initialContext = fs.readFileSync('biography.txt', 'utf8');


async function getCompletionFromMessages( messages, model = 'gpt-3.5-turbo', temperature = 0 ) {
    console.log('clicked');
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${api_key}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: messages,
            maxTokens: 200
        })
    }
    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", options)
        const data = await response.json();
        console.log(data);
        return data.choices[0].message.content;
    } catch {
        console.error(error);
    }
};

async function getBotResponse(input) {
    return await getCompletionFromMessages([...messages, {role: 'user', content: input}])
}