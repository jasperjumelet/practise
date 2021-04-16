var date = new Date();
var endhour = date.getHours

function currentNEWTime() {
  var date = new Date(); /*creating object of Date class*/
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();

  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock1").innerHTML = hour
  + " : " + min + " : " + sec;

  var t = setTimeout(function(){ currentNEWTime() }, 1000);
  console.log(t)
}

function updateTime(k) {
  if (k>=10) {
    return "" + k;
  }
  else {
    return "0" + k;
  }
}

currentNEWTime();
