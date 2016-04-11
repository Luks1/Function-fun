var mssg = "Your team ate 8 burgers, drank 17 beers and 11 fanta's".replace("Your team ate", " ").replace("drank", " ").replace("and", " ,").split(", ");
console.log(mssg);
