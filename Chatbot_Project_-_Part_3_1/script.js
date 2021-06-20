window.animationDelay = 1000;
/*

Hey Students! This script.js file isn't where you need to work to build the chatbot. You'll learn more later about how this part works - for now, just focus on chatbot.js

*/

function handleChatSubmit(e) {
  e.preventDefault();
  let msg = $("#chat-input").val();
  if (msg.trim() == '') {
    return false;
  }
  generateMessage(msg, 'user');
  setTimeout(function () {
    let response = handleInput(msg);
    generateMessage(response, 'chatbot');
  }, window.animationDelay)
}

// autoincrementing id
let getId = (function () {
  let index = 0;
  return function getId() {
    index++
    return index;
  }
})();

function generateMessage(msg, type) {
  let id = getId();
  // the 'user' gets a generic icon image
  let image = type == 'chatbot' ?
    `<img src="https://tf-assets-prod.s3.amazonaws.com/tf-curric/chatbot/chatbot/bot-profile.jpg" />`
    : '';
  let htmlString = `
    <div id='cm-msg-${id}' class="chat-msg ${type}">
      <span class="msg-avatar">
        ${image}
      </span>
      <div class="cm-msg-text">
        ${msg}
      </div>
    </div>
    `
  $(".chat-logs").append(htmlString);
  $("#cm-msg-" + id).hide().fadeIn(window.animationDelay / 3);
  if (type == 'user') {
    $("#chat-input").val('');
  }
  $(".chat-logs")
    .stop()
    .animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, window.animationDelay);
}

$(function () {
  $("#chat-submit").click(handleChatSubmit)

  $(document).delegate(".chat-btn", "click", handleChatSubmit)

  let first = true;
  // toggle the chat open and closed
  $("#chat-circle").click(function () {
    if (first) {
      let greeting = botGreeting();
      generateMessage(greeting, 'chatbot')
      first = false;
    }
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
  })

  $(".chat-box-toggle").click(function () {
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
  })
})