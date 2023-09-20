// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs()
var saveBtn = $('.saveBtn')
var hour = dayjs().format('HH');

function displayTime(){
var date = dayjs().format('dddd, MMMM D');
$('#date').text(date);
var time = dayjs().format('hh:mm:ss');
$('#time').text(time);
}

// function renderTasks(){
//   var taskInput = localStorage.getItem('value')
//   $('.description').text(taskInput)
// }


$('.time-block').each(function () {

var timeDisplay = $(this).attr('id').split('-')[1];

var textEntry = localStorage.getItem(timeDisplay);
    var textArea = $(this).find(".description");
    textArea.val (textEntry);

    if (timeDisplay < hour){
      $(this).find('.description').addClass('past');
  }else if(timeDisplay == hour){
      $(this).find('.description').addClass('present');
  }else{
      $(this).find('.description').addClass('future');
   }
});


$(".saveBtn").on('click', function () {
  
  var value = $(this).parent().find(".description").val();
  var key = $(this).parent().attr("id").split("-")[1];
  localStorage.setItem(key, value);
});

 setInterval(displayTime,1000)








 