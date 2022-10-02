function renderTime() {
  var mydate = new Date();

  var year = mydate.getFullYear();
  var day = mydate.getDay();
  var month = mydate.getMonth();
  var daym = mydate.getDate();

  var dayarray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  var montharray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var isPM = false;
  var currentTime = new Date();
  var hours = currentTime.getHours();
  if(hours == 24) {
    hours = 0;
  } else if (hours > 12) {
    hours = hours - 12;
    isPM = true;
  }

  if(hours < 10) {
    hours = "0" + hours;
  }

  var minutes = currentTime.getMinutes();
  if(minutes < 10){
    minutes = "0" + minutes;
  }

  var myClock = document.getElementById("clockDisplay");
  var myDate = document.getElementById("dateDisplay");

  if(isPM == true) {
    myClock.textContent = "" + hours + ":" + minutes + " PM";
    myClock.innerText = "" + hours + ":" + minutes + " PM";
  } else {
    myClock.textContent = "" + hours + ":" + minutes + " AM";
    myClock.innerText = "" + hours + ":" + minutes + " AM";
  }
  
  myDate.textContent = "" + dayarray[day] + ", "  + montharray[month] + " " + daym + ", " + year;
  myDate.innerText = "" + dayarray[day] + ", " + montharray[month] + " " + daym + ", " + year;

  setInterval(function() {
    renderTime();
  }, 1000)

  //setInterval("renderTime()", 1000);
}

renderTime();
