//variables named by the time on each row
var row9 = document.getElementById("hour9");
var row10 = document.getElementById("hour10");
var row11 = document.getElementById("hour11");
var row12 = document.getElementById("hour12");
var row13 = document.getElementById("hour13");
var row14 = document.getElementById("hour14");
var row15 = document.getElementById("hour15");
var row16 = document.getElementById("hour16");
var row17 = document.getElementById("hour17");

//current date
$("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));

//pull time to add color coding, check to make sure it's working
var currentHour = moment().hour();
console.log(currentHour);

//color coding the hour blocks
//9AM
if (currentHour === 9) {
    row9.classList.add('present')
}
else if (currentHour > 9) {
    row9.classList.add('past')
}
else if (currentHour < 9) {
    row9.classList.add('future')
}

//10AM
if (currentHour === 10) {
    row10.classList.add('present')
}
else if (currentHour > 10) {
    row10.classList.add('past')
}
else if (currentHour < 10) {
    row10.classList.add('future')
}

//11AM
if (currentHour === 11) {
    row11.classList.add('present')
}
else if (currentHour > 11) {
    row11.classList.add('past')
}
else if (currentHour < 11) {
    row11.classList.add('future')
}

//12PM
if (currentHour === 12) {
    row12.classList.add('present')
}
else if (currentHour > 12) {
    row12.classList.add('past')
}
else if (currentHour < 12) {
    row12.classList.add('future')
}

//1PM
if (currentHour === 13) {
    row13.classList.add('present')
}
else if (currentHour > 13) {
    row13.classList.add('past')
}
else if (currentHour < 13) {
    row13.classList.add('future')
}

//2PM
if (currentHour === 14) {
    row14.classList.add('present')
}
else if (currentHour > 14) {
    row14.classList.add('past')
}
else if (currentHour < 14) {
    row14.classList.add('future')
}

//3PM
if (currentHour === 15) {
    row15.classList.add('present')
}
else if (currentHour > 15) {
    row15.classList.add('past')
}
else if (currentHour < 15) {
    row15.classList.add('future')
}

//4PM
if (currentHour === 16) {
    row16.classList.add('present')
}
else if (currentHour > 16) {
    row16.classList.add('past')
}
else if (currentHour < 16) {
    row16.classList.add('future')
}

//5PM
if (currentHour === 17) {
    row17.classList.add('present')
}
else if (currentHour > 17) {
    row17.classList.add('past')
}
else if (currentHour < 17) {
    row17.classList.add('future')
}

//save textbox input to hour
$(".saveBtn").click(function () {
    var textInput = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");

    localStorage.setItem(hour, textInput);
})

//getting textbox input down from local storage
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour1 .description").val(localStorage.getItem("hour1"));
$("#hour2 .description").val(localStorage.getItem("hour2"));
$("#hour3 .description").val(localStorage.getItem("hour3"));
$("#hour4 .description").val(localStorage.getItem("hour4"));
$("#hour5 .description").val(localStorage.getItem("hour5"));