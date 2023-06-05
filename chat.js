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
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
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

function getHardResponses(userText) {
    let botResponse = getBotResponse(userText);
}