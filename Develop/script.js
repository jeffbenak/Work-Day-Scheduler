var timeDisplayEl = $('#time-display');




  function displayTime() {
    var rightNow = moment().format("dddd, MMM Do");
    timeDisplayEl.text(rightNow);
  }

  setInterval(displayTime, 1000);



 