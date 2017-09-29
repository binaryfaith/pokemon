var array = "";
for (var index = 1; index <= 151; index++) {
    array += "<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + index + ".png'>";
}

$(document).ready(function(){
    $("#wrapper").append(array); 
});

