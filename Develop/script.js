var timeDisplayEl = $('#time-display');


// Displays the current day and date

  function displayTime() {
    var rightNow = moment().format("dddd, MMM Do");
    timeDisplayEl.text(rightNow);
  }

  setInterval(displayTime, 1000);




// Created a variable for each stored value in each text area
  
var storedValue1 = localStorage.getItem("storedValue1");
var storedValue2 = localStorage.getItem("storedValue2");
var storedValue3 = localStorage.getItem("storedValue3");
var storedValue4 = localStorage.getItem("storedValue4");
var storedValue5 = localStorage.getItem("storedValue5");
var storedValue6 = localStorage.getItem("storedValue6");
var storedValue7 = localStorage.getItem("storedValue7");
var storedValue8 = localStorage.getItem("storedValue8");
var storedValue9 = localStorage.getItem("storedValue9");


// Created a function for each save button

  function saveBtnOne() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr('id');
    localStorage.setItem("storedValue1", text);

  }

  function saveBtnTwo() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr('id');
    localStorage.setItem("storedValue2", text);
    localStorage.setItem(time);
    console.log(text);
  }

  function saveBtnThree() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr('id');
    localStorage.setItem("storedValue3", text);

  }

  function saveBtnFour() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr('id');
    localStorage.setItem("storedValue4", text);

  }
 
  function saveBtnFive() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr('id');
    localStorage.setItem("storedValue5", text);

  }

  function saveBtnSix() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr('id');
    localStorage.setItem("storedValue6", text);

  }

  function saveBtnSeven() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr('id');
    localStorage.setItem("storedValue7", text);

  }

  function saveBtnEight() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr('id');
    localStorage.setItem("storedValue8", text);

  }

  function saveBtnNine() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr('id');
    localStorage.setItem("storedValue9", text);

  }


  function get() {
    localStorage.getItem("storedValue1", "storedValue2", "storedValue3", 
    "storedValue4", "storedValue5", "storedValue6", "storedValue7", 
    "storedValue8", "storedValue9");
 
       $(".saveBtn").siblings(".description")[0].innerHTML = storedValue1;
       $(".saveBtn").siblings(".description")[1].innerHTML = storedValue2;
       $(".saveBtn").siblings(".description")[2].innerHTML = storedValue3;
       $(".saveBtn").siblings(".description")[3].innerHTML = storedValue4;
       $(".saveBtn").siblings(".description")[4].innerHTML = storedValue5;
       $(".saveBtn").siblings(".description")[5].innerHTML = storedValue6;
       $(".saveBtn").siblings(".description")[6].innerHTML = storedValue7;
       $(".saveBtn").siblings(".description")[7].innerHTML = storedValue8;
       $(".saveBtn").siblings(".description")[8].innerHTML = storedValue9;
  }






  // Added on click functionality to each save button 

  $("#button1").on("click", saveBtnOne);
  $("#button2").on("click", saveBtnTwo);
  $("#button3").on("click", saveBtnThree);
  $("#button4").on("click", saveBtnFour);
  $("#button5").on("click", saveBtnFive);
  $("#button6").on("click", saveBtnSix);
  $("#button7").on("click", saveBtnSeven);
  $("#button8").on("click", saveBtnEight);
  $("#button9").on("click", saveBtnNine);