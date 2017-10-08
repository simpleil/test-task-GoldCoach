 function startTimer()  {

	var days = document.getElementById("days").innerHTML;
	var hours = document.getElementById("hours").innerHTML;
	var minutes = document.getElementById("minutes").innerHTML;
	var seconds = document.getElementById("seconds").innerHTML;
	if (seconds == 0) {
      if (minutes == 0) {
			if (hours == 0) {
				if (days == 0){
					alert("Время реестрации вышло");
					window.location.reload();
					return;
				}
				days--;
				hours = 24;
				if (days < 10) {days = "0" + days};
			}
			hours--;
			minutes = 60;
			if (hours < 10) {hours = "0" + hours};
      }
      minutes--;
      if (minutes < 10) {minutes = "0" + minutes};
      seconds = 59;
    }
    else seconds--;
    if (seconds < 10) {seconds = "0" + seconds};
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    setTimeout(startTimer, 1000);
  }
startTimer();
