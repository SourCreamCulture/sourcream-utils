async chatBot(message, input, uuid = 0101) {
    if (!message)
        throw new ReferenceError('sourcream-utils => "message" is not defined');
    if (!input) throw new ReferenceError('sourcream-utils => "input" is not defined');
    const fetch = require("node-fetch");
    fetch(
        `https://api.monkedev.com/fun/chat?msg=${encodeURIComponent(
            input
        )}&uid=${uuid}`
    )
        .then((res) => res.json())
        .then(async (json) => {
            return message.reply(json.response);
        });
}