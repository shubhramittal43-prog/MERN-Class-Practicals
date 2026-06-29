// Function to Update Clock

function updateClock() {

    let now = new Date();

    // Hours, Minutes, Seconds

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // AM / PM

    let ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-Hour Format

    hours = hours % 12;

    hours = hours ? hours : 12;

    // Add Leading Zero

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Display Time

    document.getElementById("timer").innerHTML =
        hours + ":" + minutes + ":" + seconds;

    // Display AM / PM

    document.getElementById("ampm").innerHTML = ampm;

    // Days Array

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    // Months Array

    let months = [
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

    // Display Day

    document.getElementById("day").innerHTML =
        days[now.getDay()];

    // Display Date

    document.getElementById("date").innerHTML =
        now.getDate() + " " +
        months[now.getMonth()] + " " +
        now.getFullYear();

}

// Run Immediately

updateClock();

// Update Every Second

setInterval(updateClock, 1000);