const { chatBot } = require('reconlx');

_chatbot (message,input) {
    if(!message) throw new TypeError("No message or message.channel was provided")
    if(!input) throw new TypeError("No input (input to give) was provided")
  chatBot(message, input);

}