function scuberGreetingForFeet(feet){
  // Write your code here!
  let result;
  if(feet < 400){
    result = "This one is on me!";
  } else if(feet > 2000 && feet <= 2500) {
      result = "I will gladly take your thirty bucks.";
  } else if(feet > 2500) {
      result = "No can do.";
  }
  return result;
}

function ternaryCheckCity(city){
  // Write your code here!
  const message = city === "NYC" ? "Ok, sounds good." : "No go.";
  return message;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let response;
  switch (tip) {
    case 'generous':
      response = "Thank you so much.";
      break;
    case 'not as generous':
      response = "Thank you.";
      break;
    default:
      response = "Bye.";
      break;
  }
  return response;
}