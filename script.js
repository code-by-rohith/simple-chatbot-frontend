// script.js

function sendMessage() {
  var userInput = document.getElementById("user-input").value.trim();
  if (userInput === "") return;

  // Display user message
  displayMessage(userInput, true);

  // Process user input and generate bot response
  var botResponse = generateResponse(userInput.toLowerCase());

  // Display bot response after a short delay to simulate processing time
  setTimeout(function() {
    displayMessage(botResponse, false);
  }, 500);

  // Clear input field
  document.getElementById("user-input").value = "";
}

function generateResponse(userInput) {
  // Dictionary mapping user inputs to bot responses
  var responses = {
    "hello": "Hi there, how can I help?",
    "hi": "Hi there, what can I do for you?",
    "how are you": "Fine, and you?",
    "fine": "Great! How can I help you?",
    "thanks": "You're welcome!",
    "thank you": "My pleasure!",
    "what do you sell": "We have coffee and tea.",
    "tell me a joke": "What did the buffalo say when his son left for college? Bison!",
    "goodbye": "Have a nice day!",
    "who are you": "I'm a chatbot designed to assist you.",
    "what is your name": "I don't have a name, but you can call me Chatbot.",
    "where are you from": "I exist in the digital realm, but I'm here to help you wherever you are.",
    "how can I contact you": "You can't contact me directly, but I'm here to assist you with any questions you have.",
    // Default response for unrecognized inputs
    "default": "Sorry! I didn't understand that."
  };

  // Return corresponding bot response or default response
  return responses[userInput] || responses["default"];
}

function displayMessage(message, isUser) {
  var chatMessages = document.getElementById("chat-messages");
  var messageClass = isUser ? "message-user" : "message-bot";
  var messageElement = document.createElement("div");
  messageElement.className = "message " + messageClass;
  messageElement.innerHTML = message;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
