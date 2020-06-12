
var current_date = new Date();

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var current_month = months[current_date.getMonth()];
var current_day_of_month = current_date.getDate();
var current_day_of_week = days[current_date.getDay()];
var current_year = current_date.getFullYear();
function nth(n){return["st","nd","rd"][((n+90)%100-10)%10-1]||"th"}

 // var current_date_string = current_date.toDateString()
var current_date_string = current_day_of_week.concat(", ", current_month, " ", current_day_of_month, nth(current_day_of_month), " ", current_year);

var current_time = current_date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

document.getElementById("date").innerHTML = current_date_string;
document.getElementById("time").innerHTML = current_time;
