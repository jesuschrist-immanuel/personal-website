const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
    apiKey: "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"
});

const openai = new OpenAIApi(config);

async function chatbot() {
    const completion = await openai.createChatCompletion({
        model: 'gpt-4',
        messages: [{role: 'user', content: "Where did Elon Musk go to college?"}],
        max_tokens: 256
    });
    console.log(completion.data.choices[0].message.content);
}

function getBotResponse(input) {
    if (input == "What is your name?") {
        return "Immanuel";
    }
    return 'woof';
}