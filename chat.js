import { getCompletionFromMessages } from "./responses.js";

async function getInitialContext() {
  const biography = await fetch("biography.txt");
  const initialContext = await biography.text();
  return initialContext;
}

const initialContext = await getInitialContext();

// Collapsible
var coll = document.getElementsByClassName("collapsible");
// var text = document.querySelector(".intro-text");
// var image = document.querySelector(".intro-image");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var content = this.nextElementSibling;

    // text.classList.add("move-left")
    // image.classList.add("move-left-harder");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      // text.classList.remove("move-left")
      // image.classList.remove("move-left-harder");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function getTime() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  let time = hours + ":" + minutes + " " + ampm;
  return time;
}

function firstBotMessage() {
  const firstMessage =
    "Hey! I'm Immanuel's chatbot, <b>ImmanuelAI</b>. Ask me anything about Immanuel, and I'll provide you with the scoop on his background, interests, or experiences. Let's start chatting!";

  document.getElementById("botStarterMessage").innerHTML =
    "<span>" + firstMessage + "</span>";

  let time = getTime();

  document.getElementById("chat-timestap").innerHTML = time;
  document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

let messages = [
  {
    role: "system",
    content: initialContext,
  },
  {
    role: "assistant",
    content:
      "Hey! I'm Immanuel's chatbot, ImmanuelAI. Ask me anything about Immanuel, and I'll provide you with the scoop on his background, interests, or experiences. Let's start chatting!",
  },
];

async function getHardResponse(userText) {
  let botHtml = "";

  let botResponse = await getBotResponse(userText);
  botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
  $("#chatbox").append(botHtml);

  messages.push(
    { role: "user", content: userText },
    { role: "assistant", content: botResponse }
  );
  console.log(messages);

  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

async function getBotResponse(input) {
  try {
    return await getCompletionFromMessages([
      ...messages,
      { role: "user", content: input },
    ]);
  } catch (error) {
    console.log(error);
  }
}

function getResponse() {
  let userText = $("#textInput").val();

  if (userText == "") {
    userText = "What is your name?";
  }
  let userHtml = '<p class="userText"><span>' + userText + "</span></p>";
  document.getElementById("textInput").value = "";
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  setTimeout(async () => {
    await getHardResponse(userText);
  }, 1000);
}

function buttonSendText(sampleText) {
  let userHtml = '<p class="userText"><span>' + sampleText + "</span></p>";
  document.getElementById("textInput").value = "";
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

document.getElementById("send-icon").addEventListener("click", getResponse);

document.getElementById("reset-icon").addEventListener("click", () => {
  const chatbox = document.getElementById("chatbox");
  const userTextElements = chatbox.getElementsByClassName("userText");
  const botTextElements = chatbox.getElementsByClassName("botText");

  // Remove userText elements
  while (userTextElements.length > 0) {
    userTextElements[0].remove();
  }

  // Remove botText elements
  for (let i = 0; i < botTextElements.length; i++) {
    const botTextElement = botTextElements[i];
    if (botTextElement.id !== "botStarterMessage") {
      const childBotTextElements =
        botTextElement.getElementsByClassName("botText");
      if (childBotTextElements.length === 0) {
        botTextElement.remove();
      }
    }
  }

  const newTime = getTime();
  document.getElementById("chat-timestap").innerHTML = newTime;
});

document.getElementById("textInput").addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    getResponse();
  }
});
