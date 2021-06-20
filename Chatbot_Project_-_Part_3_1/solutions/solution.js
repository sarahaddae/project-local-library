// v1
// write a function that says hello from the bot, to be called when the chat starts
function botGreeting() {
  return "Hello, I'm the Getaway Bot! I want to help you find your dream destination. You can ask me about our current offers, payment, or contact info. Or type 'help'.";
}

// v2
// When the bot doesn't understand, we still want the bot to give a response to the user. Write a function `botResponse` that explains that the bot didn't understand. It should say "I'm not sure I understood your message: '[message]'. Type 'help' to see more options."
function botResponse(message) {
  return (
    "I'm not sure I understood your message: '" +
    message +
    "'. Type 'help' to see more options."
  );
}

// v2
function showHelpOptions(options) {
  let response = "Enter a keyword for help with a topic: ";
  response += options.join(", ") + ".";
  return response;
}

// v2
// contactInfoHelp: return a string with some info about a phone number to call / email address / location
// (curriculum dev fyi - https://softwareengineering.stackexchange.com/questions/376535/whats-the-phone-number-equivalent-of-example-org)
function contactInfoHelp() {
  return "We have 24 hour phone support. Our phone number is +01 312 555 8432. We look forward to hearing from you!";
}

// v2
// paymentHelp: describe the payment options
function paymentHelp(paymentType) {
  if (paymentType == "credit card") {
    return "You can pay with any major credit card. Enter your card details and billing address at checkout.";
  } else {
    return "We have three payment options: credit card, paypal, or apple pay. Choose your preferred method at checkout.";
  }
}

// v3
function listDestinations(destinations) {
  let response =
    "I can tell you about our current recommended destinations. Which one do you want to hear about? ";
  let locations = getLocations(destinations);
  response += locations.join("; ") + ". ";
  response += "Enter a location for more info."
  return response;
}

// v3
function getLocations(destinations) {
  let locations = [];
  for (let i = 0; i < destinations.length; i++) {
    let location = destinations[i].location;
    locations.push(location);
  }  
  return locations;
}

// v3
// productDescription: given an object of products, access a product by name, and return its description
function findDestination(input, destinations) {
  for (let i = 0; i < destinations.length; i++) {
    if (
      destinations[i].location.toLowerCase()
      .includes(input.toLowerCase())
    ) {
      return destinations[i];
    }
  }
  return null;
}

const helpOptions = [
  "contact",
  "payment",
  "credit card",
  "destinations", // only in v3
];

function handleInput(userMessage) {
  if (userMessage.includes("help")) {
    return showHelpOptions(helpOptions);
  } else if (userMessage.includes("contact")) {
    return contactInfoHelp();
  } else if (
    userMessage.includes("payment") ||
    userMessage.includes("credit card")
  ) {
    return paymentHelp(userMessage);
  } else if (userMessage.includes("destination")) {
    return listDestinations(destinations);
  } else if(userMessage.length >= 3) {
    let destination = findDestination(userMessage, destinations);
    if (destination) {
      return destination.description;
    }
  }
  return botResponse(userMessage);
}


global.findDestination = findDestination;
global.listDestinations = listDestinations;

global.botGreeting = botGreeting;
global.handleInput = handleInput;