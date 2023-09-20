//variables for time
var today = dayjs();
var hour = dayjs().format("HH");
//will display current time
function displayTime() {
  var date = dayjs().format("dddd, MMMM D");
  $("#date").text(date);
  var time = dayjs().format("hh:mm:ss");
  $("#time").text(time);
}
// will find the time display from local storage and display it in the correct column of time and change the color
//of the background
$(".time-block").each(function () {
  var timeDisplay = $(this).attr("id").split("-")[1];

  var textEntry = localStorage.getItem(timeDisplay);
  var textArea = $(this).find(".description");
  textArea.val(textEntry);

  if (timeDisplay < hour) {
    $(this).find(".description").addClass("past");
  } else if (timeDisplay == hour) {
    $(this).find(".description").addClass("present");
  } else {
    $(this).find(".description").addClass("future");
  }
});

$(".saveBtn").on("click", function () {
  var value = $(this).parent().find(".description").val();
  var key = $(this).parent().attr("id").split("-")[1];
  localStorage.setItem(key, value);
});

setInterval(displayTime, 1000);
