            //    Chapter 31 - 34

// var now = new Date()
// document.write(now)

// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var a = new Date()
// var currentMonth = months[a.getMonth()]
// alert("Current Month: " + currentMonth)

// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// var b = new Date()
// var today = days[b.getDay()].slice(0, 3)
// alert("Today is " + today)

// var a = new Date()
// var today = a.getDay()
// if (today === 0 || today === 6) {
//     document.write("It's Fun day")
// }


// var d = new Date()
// var date = d.getDate()
// if (date < 16) {
//     document.write("First fifteen days of the month")
// }
// else {
//     document.write("Last days of the month")
// }


// / var b = new Date()
// document.write("Current Date: " + e)
// var inMilli = e.getTime()
// document.write("<br> Elapsed milliseconds since January 1, 1970: " + inMilli)
// var inMin = inMilli / (1000 * 60)
// document.write("<br> Elapsed minutes since January 1, 1970: " + inMin)

// var f = new Date()
// var hour = f.getHours()
// if(hour < 12) {
//     alert("It's AM")
// }
// else {
//     alert("It's PM")
// }


// var laterDate = new Date("December 31, 2025")
// document.write("Later Date: " + laterDate)

// var ramadan = new Date("April 14, 2021").getTime()
// var today = new Date().getTime()
// var diff = today - ramadan 
// var days = Math.floor(diff / (1000 * 60 * 60 * 24))
// document.write(days + " days have passed since 1st Ramadan, 2021")

// var now = new Date()
// var nowT = now.getTime()
// var begin = new Date("January 1, 2021 00:00:00").getTime()
// var diff = Math.floor((nowT - begin) / (1000))
// document.write("On reference date " + now + ", <br>")
// document.write(diff + " seconds had passed since beginning of 2021")

// var date = new Date()
// document.write("current date: " + date)
// var hours = date.getHours()
// date = new Date(date.setHours(hours - 1))
// document.write("<br> 1 hour ago, it was " + date)

// var date = new Date()
// document.write("current date: " + date)
// var years = date.getFullYear()
// date = new Date(date.setFullYear(years - 100))
// document.write("<br> 100 years back, it was " + date)

// var userAge = +prompt("Enter your age")
// var date = new Date()
// var currYear = date.getFullYear()
// var age = currYear - userAge
// document.write("Your age is " + userAge)
// document.write("<br> Your birth year is " + age)
