// JavaScript Document
"use strict";
/*Date*/
var thisDay = new Date();

document.getElementById("date").innerHTML= calDate(thisDay);
function calDate(calDate){
	var date= getDay(calDate)+"&nbsp";
	date+=thisDay.getDate()+"&nbsp";
	date+=getMonth(calDate)+", ";
	date+=thisDay.getFullYear();
	return date;
}

function getDay(calDate){
	var date;
var dayOfWeek=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
for(var i=0; i<dayOfWeek.length; i++){
	if(i===calDate.getDay())
		 date=dayOfWeek[i];
}
return date;
}

function getMonth(calDate){
	var month;
var MonthOfYear=["Jan", "Feb", "Mar", "April", "May", "June", "July", "August", "Sept", "Oct", "Nov", "Dec"];
	for(var i=0; i<MonthOfYear.length; i++){
		if(i===calDate.getMonth())
			month=MonthOfYear[i];
	}
	return month;
	
}
/*Time*/
clock();
setInterval("clock()", 1000);
	
function clock(){
	var thisDay = new Date();
	var t = thisDay.toLocaleTimeString();
	document.getElementById("time").innerHTML=t;
}

/*Validating form */
function validate() {
    var x = document.forms["form"]["custName"].value;
    if (x == "") {
        alert("Please fill out the name");
        return false;
    }
}
