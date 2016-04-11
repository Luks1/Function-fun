var places = "in Cape Town 9, in George 7, in Port Elizabeth 5 and in Johannesburg -1";

var places = places
.replace(/ and /,",")
.replace(/in /g, "")
.replace(/, /g, ",");

console.log(places);

 places = places.split(",");

console.log(places);

places = places.map(function(place){
  var parts = place.split(" ");
  console.log(parts)
  ;
  if (parts.length > 2){
    return {
      name : parts[0] + " " + parts[1],
      temp : Number(parts[2])
    };
  }
  else{
    return {
      name : parts[0],
      temp : Number(parts[1])
    };
  }
});
console.log(places);






var lists = "in New York 25, in London 22, in Buenos Aires 33 and in Madrid 29".replace(/in /g,"").replace(/ and /, ",").replace(/, /g, ",").split(",");
console.log(lists);


var lists = lists.map(function(list){
  var lk = list.split(" ");
  console.log(lk);

  if(lk.length > 2){

    return {
            name: lk[0]+ " " +lk[1],
            temp: Number(lk[2])
           };
        }else{
              return {name:lk[0],
                         temp:Number(lk[1])

                  };
        }

  });

console.log(lists);
