//global variables
var monthEl = $(".c-main");
var dataCel = $(".c-cal__cel");
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1;
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
var monthText = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var indexMonth = month;
var todayBtn = $(".c-today__btn");
var addBtn = $(".js-event__add");
var saveBtn = $(".js-event__save");
var closeBtn = $(".js-event__close");
var winCreator = $(".js-event__creator");
var inputDate = $(this).data();
today = year + "-" + month + "-" + day;


// ------ set default events -------
function defaultEvents(dataDay,dataName,dataNotes,classTag){
  var date = $('*[data-day='+dataDay+']');
  date.attr("data-name", dataName);
  date.attr("data-notes", dataNotes);
  date.addClass("event");
  date.addClass("event--" + classTag);
}

defaultEvents(today, 'YEAH!','Today is your day','important');

defaultEvents('2018-01-10', 'No Chapter Meeting','Enjoy the break!','event');
defaultEvents('2018-03-14', 'No Chapter Meeting','Enjoy the break!','event');
defaultEvents('2018-01-17', 'Chapter Meeting','Our weekly meeting in Room 1320 during B-Block Lunch. Refreshments will be served!','birthday');
defaultEvents('2018-01-24', 'Chapter Meeting','Our weekly meeting in Room 1320 during B-Block Lunch. Refreshments will be served!','birthday');
defaultEvents('2018-01-31', 'Chapter Meeting','Our weekly meeting in Room 1320 during B-Block Lunch. Refreshments will be served!','birthday');
defaultEvents('2018-02-07', 'Chapter Meeting','Our weekly meeting in Room 1320 during B-Block Lunch. Refreshments will be served!','birthday');
defaultEvents('2018-02-14', 'Chapter Meeting','Our weekly meeting in Room 1320 during B-Block Lunch. Refreshments will be served!','birthday');
defaultEvents('2018-02-21', 'Chapter Meeting','Our weekly meeting in Room 1320 during B-Block Lunch. Refreshments will be served!','birthday');
defaultEvents('2018-02-28', 'Chapter Meeting','Our weekly meeting in Room 1320 during B-Block Lunch. Refreshments will be served!','birthday');
defaultEvents('2018-03-07', 'Chapter Meeting','Our weekly meeting in Room 1320 during B-Block Lunch. Refreshments will be served!','birthday');
defaultEvents('2018-03-21', 'Chapter Meeting','Our weekly meeting in Room 1320 during B-Block Lunch. Refreshments will be served!','birthday');
defaultEvents('2018-03-28', 'Chapter Meeting','Our weekly meeting in Room 1320 during B-Block Lunch. Refreshments will be served!','birthday');
defaultEvents('2018-04-04', 'Chapter Meeting','Our weekly meeting in Room 1320 during B-Block Lunch. Refreshments will be served!','birthday');
defaultEvents('2018-04-11', 'Chapter Meeting','Our weekly meeting in Room 1320 during B-Block Lunch. Refreshments will be served!','birthday');
defaultEvents('2018-04-18', 'Chapter Meeting','Our weekly meeting in Room 1320 during B-Block Lunch. Refreshments will be served!','birthday');
defaultEvents('2018-04-25', 'Chapter Meeting','Our weekly meeting in Room 1320 during B-Block Lunch. Refreshments will be served!','birthday');
defaultEvents('2018-05-02', 'Chapter Meeting','Our weekly meeting in Room 1320 during B-Block Lunch. Refreshments will be served!','birthday');
defaultEvents('2018-05-09', 'Chapter Meeting','Our weekly meeting in Room 1320 during B-Block Lunch. Refreshments will be served!','birthday');
defaultEvents('2018-05-16', 'Chapter Meeting','Our weekly meeting in Room 1320 during B-Block Lunch. Refreshments will be served!','birthday');
defaultEvents('2018-05-23', 'Chapter Meeting','Our weekly meeting in Room 1320 during B-Block Lunch. Refreshments will be served!','birthday');
defaultEvents('2018-05-30', 'Chapter Meeting','Our weekly meeting in Room 1320 during B-Block Lunch. Refreshments will be served!','birthday');
defaultEvents('2018-02-15', 'Chapter Photo','We will meet at 11:55 at the small gym.','birthday');

defaultEvents('2018-01-08', 'Officer Meeting','Our weekly officer meeting. Officers will discuss logistics and ways of making the chapter thrive on a daily basis.','festivity');
defaultEvents('2018-01-15', 'Officer Meeting','Our weekly officer meeting. Officers will discuss logistics and ways of making the chapter thrive on a daily basis.','festivity');
defaultEvents('2018-01-22', 'Officer Meeting','Our weekly officer meeting. Officers will discuss logistics and ways of making the chapter thrive on a daily basis.','festivity');
defaultEvents('2018-01-29', 'Officer Meeting','Our weekly officer meeting. Officers will discuss logistics and ways of making the chapter thrive on a daily basis.','festivity');
defaultEvents('2018-02-05', 'Officer Meeting','Our weekly officer meeting. Officers will discuss logistics and ways of making the chapter thrive on a daily basis.','festivity');
defaultEvents('2018-02-12', 'Officer Meeting','Our weekly officer meeting. Officers will discuss logistics and ways of making the chapter thrive on a daily basis.','festivity');
defaultEvents('2018-02-19', 'No Officer Meeting','Enjoy the break!','event');
defaultEvents('2018-02-26', 'Officer Meeting','Our weekly officer meeting. Officers will discuss logistics and ways of making the chapter thrive on a daily basis.','festivity');
defaultEvents('2018-03-05', 'Officer Meeting','Our weekly officer meeting. Officers will discuss logistics and ways of making the chapter thrive on a daily basis.','festivity');
defaultEvents('2018-03-12', 'No Officer Meeting','Enjoy the break!','event');
defaultEvents('2018-03-19', 'Officer Meeting','Our weekly officer meeting. Officers will discuss logistics and ways of making the chapter thrive on a daily basis.','festivity');
defaultEvents('2018-03-26', 'Officer Meeting','Our weekly officer meeting. Officers will discuss logistics and ways of making the chapter thrive on a daily basis.','festivity');
defaultEvents('2018-04-02', 'Officer Meeting','Our weekly officer meeting. Officers will discuss logistics and ways of making the chapter thrive on a daily basis.','festivity');
defaultEvents('2018-04-09', 'Officer Meeting','Our weekly officer meeting. Officers will discuss logistics and ways of making the chapter thrive on a daily basis.','festivity');
defaultEvents('2018-04-16', 'Officer Meeting','Our weekly officer meeting. Officers will discuss logistics and ways of making the chapter thrive on a daily basis.','festivity');
defaultEvents('2018-04-23', 'Officer Meeting','Our weekly officer meeting. Officers will discuss logistics and ways of making the chapter thrive on a daily basis.','festivity');
defaultEvents('2018-04-30', 'Officer Meeting','Our weekly officer meeting. Officers will discuss logistics and ways of making the chapter thrive on a daily basis.','festivity');
defaultEvents('2018-05-07', 'Officer Meeting','Our weekly officer meeting. Officers will discuss logistics and ways of making the chapter thrive on a daily basis.','festivity');
defaultEvents('2018-05-14', 'Officer Meeting','Our weekly officer meeting. Officers will discuss logistics and ways of making the chapter thrive on a daily basis.','festivity');
defaultEvents('2018-05-21', 'Officer Meeting','Our weekly officer meeting. Officers will discuss logistics and ways of making the chapter thrive on a daily basis.','festivity');
defaultEvents('2018-05-28', 'Officer Meeting','Our weekly officer meeting. Officers will discuss logistics and ways of making the chapter thrive on a daily basis.','festivity');

defaultEvents('2018-03-22', 'TSA Regional Conference @ Flower Mound High School','Let\'s get it on!.','important');
defaultEvents('2018-03-23', 'TSA Regional Conference @ Flower Mound High School','Let\'s get it on!.','important');
defaultEvents('2018-03-24', 'TSA Regional Conference @ Flower Mound High School','Let\'s get it on!.','important');
defaultEvents('2018-04-15', 'TSA State Conference @ Fort Worth, Texas','YEEHAW! Let\'s get it on!.','important');
defaultEvents('2018-04-16', 'TSA State Conference @ Fort Worth, Texas','YEEHAW! Let\'s get it on!.','important');
defaultEvents('2018-04-17', 'TSA State Conference @ Fort Worth, Texas','YEEHAW! Let\'s get it on!.','important');
defaultEvents('2018-06-22', 'TSA National Conference @ Atlanta, Georgia','A once-in-a-lifetime experience. Congrats to those who qualified. Let\'s get it on!.','important');
defaultEvents('2018-06-23', 'TSA National Conference @ Atlanta, Georgia','A once-in-a-lifetime experience. Congrats to those who qualified. Let\'s get it on!.','important');
defaultEvents('2018-06-24', 'TSA National Conference @ Atlanta, Georgia','A once-in-a-lifetime experience. Congrats to those who qualified. Let\'s get it on!.','important');
defaultEvents('2018-06-25', 'TSA National Conference @ Atlanta, Georgia','A once-in-a-lifetime experience. Congrats to those who qualified. Let\'s get it on!.','important');
defaultEvents('2018-06-26', 'TSA National Conference @ Atlanta, Georgia','A once-in-a-lifetime experience. Congrats to those who qualified. Let\'s get it on!.','important');
defaultEvents('2018-03-06', 'LISD Form Deadline','Turn in to Room 1345 during B-Block Lunch.','important');
defaultEvents('2018-02-20', 'Competition Event Form Deadline','Bring your $3 and form to to Room 1340 during B-Block Lunch.','important');

defaultEvents('2018-03-31', 'STEM @ the Park','High school girls will learn engineering an computer science concepts through hands-on projects.','event');





// ------ functions control -------

//button of the current day
todayBtn.on("click", function() {
  if (month < indexMonth) {
    var step = indexMonth % month;
    movePrev(step, true);
  } else if (month > indexMonth) {
    var step = month - indexMonth;
    moveNext(step, true);
  }
});

//higlight the cel of current day
dataCel.each(function() {
  if ($(this).data("day") === today) {
    $(this).addClass("isToday");
    fillEventSidebar($(this));
  }
});

//window event creator
addBtn.on("click", function() {
  winCreator.addClass("isVisible");
  $("body").addClass("overlay");
  dataCel.each(function() {
    if ($(this).hasClass("isSelected")) {
      today = $(this).data("day");
      document.querySelector('input[type="date"]').value = today;
    } else {
      document.querySelector('input[type="date"]').value = today;
    }
  });
});
closeBtn.on("click", function() {
  winCreator.removeClass("isVisible");
  $("body").removeClass("overlay");
});
saveBtn.on("click", function() {
  var inputName = $("input[name=name]").val();
  var inputDate = $("input[name=date]").val();
  var inputNotes = $("textarea[name=notes]").val();
  var inputTag = $("select[name=tags]")
    .find(":selected")
    .text();

  dataCel.each(function() {
    if ($(this).data("day") === inputDate) {
      if (inputName != null) {
        $(this).attr("data-name", inputName);
      }
      if (inputNotes != null) {
        $(this).attr("data-notes", inputNotes);
      }
      $(this).addClass("event");
      if (inputTag != null) {
        $(this).addClass("event--" + inputTag);
      }
      fillEventSidebar($(this));
    }
  });

  winCreator.removeClass("isVisible");
  $("body").removeClass("overlay");
  $("#addEvent")[0].reset();
});

//fill sidebar event info
function fillEventSidebar(self) {
  $(".c-aside__event").remove();
  var thisName = self.attr("data-name");
  var thisNotes = self.attr("data-notes");
  var thisImportant = self.hasClass("event--important");
  var thisBirthday = self.hasClass("event--birthday");
  var thisFestivity = self.hasClass("event--festivity");
  var thisEvent = self.hasClass("event");
  
  switch (true) {
    case thisImportant:
      $(".c-aside__eventList").append(
        "<p class='c-aside__event c-aside__event--important'>" +
        thisName +
        " <span> • " +
        thisNotes +
        "</span></p>"
      );
      break;
    case thisBirthday:
      $(".c-aside__eventList").append(
        "<p class='c-aside__event c-aside__event--birthday'>" +
        thisName +
        " <span> • " +
        thisNotes +
        "</span></p>"
      );
      break;
    case thisFestivity:
      $(".c-aside__eventList").append(
        "<p class='c-aside__event c-aside__event--festivity'>" +
        thisName +
        " <span> • " +
        thisNotes +
        "</span></p>"
      );
      break;
    case thisEvent:
      $(".c-aside__eventList").append(
        "<p class='c-aside__event'>" +
        thisName +
        " <span> • " +
        thisNotes +
        "</span></p>"
      );
      break;
   }
};
dataCel.on("click", function() {
  var thisEl = $(this);
  var thisDay = $(this)
  .attr("data-day")
  .slice(8);
  var thisMonth = $(this)
  .attr("data-day")
  .slice(5, 7);

  fillEventSidebar($(this));

  $(".c-aside__num").text(thisDay);
  $(".c-aside__month").text(monthText[thisMonth - 1]);

  dataCel.removeClass("isSelected");
  thisEl.addClass("isSelected");

});

//function for move the months
function moveNext(fakeClick, indexNext) {
  for (var i = 0; i < fakeClick; i++) {
    $(".c-main").css({
      left: "-=100%"
    });
    $(".c-paginator__month").css({
      left: "-=100%"
    });
    switch (true) {
      case indexNext:
        indexMonth += 1;
        break;
    }
  }
}
function movePrev(fakeClick, indexPrev) {
  for (var i = 0; i < fakeClick; i++) {
    $(".c-main").css({
      left: "+=100%"
    });
    $(".c-paginator__month").css({
      left: "+=100%"
    });
    switch (true) {
      case indexPrev:
        indexMonth -= 1;
        break;
    }
  }
}

//months paginator
function buttonsPaginator(buttonId, mainClass, monthClass, next, prev) {
  switch (true) {
    case next:
      $(buttonId).on("click", function() {
        if (indexMonth >= 2) {
          $(mainClass).css({
            left: "+=100%"
          });
          $(monthClass).css({
            left: "+=100%"
          });
          indexMonth -= 1;
        }
        return indexMonth;
      });
      break;
    case prev:
      $(buttonId).on("click", function() {
        if (indexMonth <= 11) {
          $(mainClass).css({
            left: "-=100%"
          });
          $(monthClass).css({
            left: "-=100%"
          });
          indexMonth += 1;
        }
        return indexMonth;
      });
      break;
  }
}

buttonsPaginator("#next", monthEl, ".c-paginator__month", false, true);
buttonsPaginator("#prev", monthEl, ".c-paginator__month", true, false);

//launch function to set the current month
moveNext(indexMonth - 1, false);

//fill the sidebar with current day
$(".c-aside__num").text(day);
$(".c-aside__month").text(monthText[month - 1]);