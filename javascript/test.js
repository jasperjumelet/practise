
function currentTime() {
  var date = new Date(); /*creating object of Date class*/
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerHTML = hour
  + " : " + min + " : " + sec;

  var t = setTimeout(function(){ currentTime() }, 1000);
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

currentTime();
