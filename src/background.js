// background.js chrome extension

// listen for messages from the popup
chrome.runtime.onMessage.addListener(function (msg, sender, response) {
  if (msg.command == "fetch") {
    fetch(msg.url, { method: "GET" })
      .then((response) => response.json())
      .then((text) => response(text))
      .catch((error) =>
        response({
          error: error.message,
        })
      );
  }

  return true;
});
