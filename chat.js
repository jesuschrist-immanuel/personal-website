// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
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

    // document.getElementById("chat-timestap").innerHTML = time;
    $('#chat-timestamp').append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>'
    // document.getElementById('chatbox').innerHTML = botHtml;
    $('#chatbox').append(botHtml);
    
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getResponse() {
    // let userText = document.getElementById('textInput').value;
    let userText = $('#textInput').val();

    if (userText == "") {
        userText = "What is your name?";
    }
    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
    // document.getElementById("textInput").value = "";
    // document.getElementById("chatbox").innerHTML = userHtml;
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)
}

function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';
    // document.getElementById("textInput").value = "";
    // document.getElementById("chatbox").innerHTML = userHtml;
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked");
}

$('#textInput').keydown(function(e) {
    if (e.code == 'Enter') {
        getResponse();
    }
});