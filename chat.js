import fs from fs

const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
    apiKey: "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"
});

const openai = new OpenAIApi(config);

async function getCompletionFromMessages( messages, model = 'gpt-3.5-turbo', temperature = 0 ) {
    const completion = await openai.createChatCompletion({
        model: model,
        messages: messages,
        temperature: temperature       // The degree of randomness in the output
    });

    return completion.data.choices[0].message.content;
};

// Collapsible
var coll = document.getElementsByClassName("collapsible");
var text = document.querySelector(".intro-text-image")
var image = document.querySelector(".intro-image")

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        text.classList.add("move-left")
        image.classList.add("move-left-harder");

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            text.classList.remove("move-left")
            image.classList.remove("move-left-harder");
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
};

function getTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    let time = hours + ':' + minutes + ' ' + ampm;
    return time;
}

function firstBotMessage() {
    const firstMessage = "Hey! I'm Immanuel's chatbot, <b>ImmanuelAI</b>. Ask me anything about Immanuel, and I'll provide you with the scoop on his background, interests, or experiences. Let's start chatting!";

    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    document.getElementById("chat-timestap").innerHTML = time;
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

const initialContext = fs.readFileSync('biography.txt', 'utf8')
let messages = [
    {'role': 'system', 'content': initialContext},
    {'role': 'assistant', 'content': "Hey! I'm Immanuel's chatbot, ImmanuelAI. Ask me anything about Immanuel, and I'll provide you with the scoop on his background, interests, or experiences. Let's start chatting!"}
]

function getHardResponse(userText) {
    let botHtml = "";
    
    let botResponse = getBotResponse(userText);
    botHtml = '<p class="botText"><span>' + botResponse + '</span></p>'
    $('#chatbox').append(botHtml);

    messages.push({ 'role': 'user', 'content': userText }, { 'role': 'assistant', 'content': botResponse });
    console.log(messages);
    
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

async function getBotResponse(input) {
    return await getCompletionFromMessages([...messages, {'role': 'user', 'content': input}])
}

function getResponse() {
    let userText = $('#textInput').val();

    if (userText == "") {
        userText = "What is your name?";
    }
    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
    document.getElementById("textInput").value = "";
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)
}

function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';   
    document.getElementById("textInput").value = "";
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked");
}

document.getElementById("textInput").addEventListener("keydown", (e) => {
    if (e.code == "Enter") {
        getResponse();
    }
});