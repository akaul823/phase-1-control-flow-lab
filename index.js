function scuberGreetingForFeet(feet){
  // Use if and else if statements to return the correct greeting based on the distance the 
  //passenger desires to travel.
  if(feet > 0 && feet < 400){
    return "This one is on me!";
  }
  else if(feet > 400 && feet < 2000){
    return "That will be twenty bucks.";
  }
  else if(feet > 2000 && feet < 2500){
    return "I will gladly take your thirty bucks.";
  }
  else{
    return "No can do.";
  }
}
function ternaryCheckCity(city){
  return city === "NYC"? ("Ok, sounds good."):("No go.");
  // Use a ternary operator to return the correct response based on the desired destination of the passenger.
}

function switchOnCharmFromTip(respo){
  // Use a switch statement to return a different response based on the generosity of the passenger's tip.
  switch(respo){
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    default:
      return "Bye."

    


  }

}