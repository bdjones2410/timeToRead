//idea to make it into a prompt for the user to change credit to Max Krause

var readSpeed = prompt("What is your average word per minute read speed? global average is 230");
  function makesure() {
  if(isNaN(readSpeed)) {
    readSpeed = 230;
    return readSpeed
  }
  else {
    return readSpeed
  }
};
makesure();

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
