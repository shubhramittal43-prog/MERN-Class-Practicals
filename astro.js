function findZodiac() {

    let day = parseInt(prompt("Enter your Birth Date (1-31)"));

    let month = prompt("Enter your Birth Month\n\nExamples:\n1\n01\nJan\nJAN\nJanuary\nJANUARY");

    if (month == null || isNaN(day)) {
        alert("Invalid Input!");
        return;
    }

    month = month.trim().toLowerCase();

    if (month == "1" || month == "01" || month == "jan" || month == "january") {
        month = 1;
    }

    else if (month == "2" || month == "02" || month == "feb" || month == "february") {
        month = 2;
    }

    else if (month == "3" || month == "03" || month == "mar" || month == "march") {
        month = 3;
    }

    else if (month == "4" || month == "04" || month == "apr" || month == "april") {
        month = 4;
    }

    else if (month == "5" || month == "05" || month == "may") {
        month = 5;
    }

    else if (month == "6" || month == "06" || month == "jun" || month == "june") {
        month = 6;
    }

    else if (month == "7" || month == "07" || month == "jul" || month == "july") {
        month = 7;
    }

    else if (month == "8" || month == "08" || month == "aug" || month == "august") {
        month = 8;
    }

    else if (month == "9" || month == "09" || month == "sep" || month == "sept" || month == "september") {
        month = 9;
    }

    else if (month == "10" || month == "oct" || month == "october") {
        month = 10;
    }

    else if (month == "11" || month == "nov" || month == "november") {
        month = 11;
    }

    else if (month == "12" || month == "dec" || month == "december") {
        month = 12;
    }

    else {

        alert("Invalid Month!");

        return;

    }

    let valid = true;

    if (month == 1 && (day < 1 || day > 31))
        valid = false;

    else if (month == 2 && (day < 1 || day > 29))
        valid = false;

    else if (month == 3 && (day < 1 || day > 31))
        valid = false;

    else if (month == 4 && (day < 1 || day > 30))
        valid = false;

    else if (month == 5 && (day < 1 || day > 31))
        valid = false;

    else if (month == 6 && (day < 1 || day > 30))
        valid = false;

    else if (month == 7 && (day < 1 || day > 31))
        valid = false;

    else if (month == 8 && (day < 1 || day > 31))
        valid = false;

    else if (month == 9 && (day < 1 || day > 30))
        valid = false;

    else if (month == 10 && (day < 1 || day > 31))
        valid = false;

    else if (month == 11 && (day < 1 || day > 30))
        valid = false;

    else if (month == 12 && (day < 1 || day > 31))
        valid = false;

    if (!valid) {

        alert("Invalid Date!");

        return;

    }

    if (month == 2 && day == 29) {

        alert("🎉 You are born on Leap Day!");

    }

    let zodiac = "";

    let dates = "";

    let description = "";

    let image = "";

    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {

        zodiac = "Aries ♈";

        dates = "March 21 - April 19";

        description = "Confident, courageous and energetic.";

        image = "https://i.pinimg.com/736x/b4/95/5a/b4955a82c7d406eaf350d0825b912f0d.jpg";

    }

    else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {

        zodiac = "Taurus ♉";

        dates = "April 20 - May 20";

        description = "Reliable, patient and practical.";

        image = "https://i.pinimg.com/1200x/8c/12/ac/8c12acfd1d7c1f813549ddbe6e3e33d1.jpg";

    }

    else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {

        zodiac = "Gemini ♊";

        dates = "May 21 - June 20";

        description = "Curious, intelligent and expressive.";

        image = "https://i.pinimg.com/1200x/2d/b2/eb/2db2ebcb2e9d20785da4cc039105638c.jpg";

    }

    else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {

        zodiac = "Cancer ♋";

        dates = "June 21 - July 22";

        description = "Emotional, caring and loyal.";

        image = "https://i.pinimg.com/736x/b9/85/82/b98582dab8de8c5a79a6199786b19b4d.jpg";

    }

    else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {

        zodiac = "Leo ♌";

        dates = "July 23 - August 22";

        description = "Bold, creative and passionate.";

        image = "https://i.pinimg.com/1200x/7d/c4/7d/7dc47d82e36d5a79825d3210d8562dbf.jpg";

    }

    else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {

        zodiac = "Virgo ♍";

        dates = "August 23 - September 22";

        description = "Hardworking, organized and kind.";

        image = "https://i.pinimg.com/1200x/b0/83/9f/b0839f59acd89b5db302cd197cb2d1ba.jpg";

    }
        else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {

        zodiac = "Libra ♎";

        dates = "September 23 - October 22";

        description = "Balanced, charming and diplomatic.";

        image = "https://i.pinimg.com/1200x/c5/7a/fe/c57afe6523db005e8de9cb6fc2d4d264.jpg";

    }

    else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {

        zodiac = "Scorpio ♏";

        dates = "October 23 - November 21";

        description = "Passionate, fearless and determined.";

        image = "https://i.pinimg.com/736x/a9/08/c0/a908c035e2f48e652273cb3d34ec31c8.jpg";

    }

    else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {

        zodiac = "Sagittarius ♐";

        dates = "November 22 - December 21";

        description = "Optimistic, adventurous and independent.";

        image = "https://i.pinimg.com/736x/f6/71/bf/f671bff17fcb7986613b3a08120915cd.jpg";

    }

    else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {

        zodiac = "Capricorn ♑";

        dates = "December 22 - January 19";

        description = "Disciplined, responsible and ambitious.";

        image = "https://i.pinimg.com/1200x/b5/78/e9/b578e92f00a58eced6552c5ff3c88f19.jpg";

    }

    else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {

        zodiac = "Aquarius ♒";

        dates = "January 20 - February 18";

        description = "Innovative, independent and humanitarian.";

        image = "https://i.pinimg.com/1200x/48/d9/a3/48d9a39683317f4a1193d3fa29974a66.jpg";

    }

    else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {

        zodiac = "Pisces ♓";

        dates = "February 19 - March 20";

        description = "Compassionate, imaginative and intuitive.";

        image = "https://i.pinimg.com/1200x/0a/30/33/0a3033372c62aa03b9d574958ad5e817.jpg";

    }

    document.getElementById("result").style.display = "block";

    document.getElementById("zodiacImage").src = image;

    document.getElementById("zodiacName").innerHTML = zodiac;

    document.getElementById("zodiacDates").innerHTML =
    "<strong>Date Range:</strong> " + dates;

    document.getElementById("zodiacDescription").innerHTML =
    "<strong>Personality:</strong> " + description;

}