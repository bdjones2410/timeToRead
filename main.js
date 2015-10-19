var readSpeed = 230;

function WPM(things) {
  var wordsPer = Math.round(things.length/readSpeed);
  return wordsPer
}

function getCount (sectionNum, writeTo){
var roughArray = document.getElementById(sectionNum).textContent.split(" ");

//Thank you Paul Draper(stackOverflow) for this method of removing the white spaces from my array.

roughArray = roughArray.filter(function(str){
  return /\S/.test(str);
});


var timeToRead = WPM(document.getElementById(sectionNum).textContent.split(" "));
document.getElementById(writeTo).innerHTML = timeToRead + " minutes to read";
}


getCount('first','firstPerMin');

getCount('second','secondPerMin');
