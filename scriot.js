let time = document.getElementById("time");
let dateInput = document.getElementById("alarmDate");
let timeInput = document.getElementById("alarmTime");
let setAlarmButton = document.getElementById("setAlarm");
let alarmsContainer = document.getElementById("alarms");
let maxAlarms = 3;
let alarmTimesArray = [];

function displayCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");
    let period = hours >= 12 ? "PM" : "AM";
    if (hours > 12) {
        hours -= 12;
    }
    time.textContent = `${hours}:${minutes}:${seconds} ${period}`;
}

function setAlarm() {
    const selectedDate = new Date(dateInput.value + "T" + timeInput.value);
    const now = new Date();
    if (selectedDate <= now) {
        alert("Invalid time. Please select a future date and time.");
        return;
    }
    if (alarmTimesArray.includes(selectedDate.toString())) {
        alert("Alarm already set for this time.");
        return;
    }
    if (alarmTimesArray.length >= maxAlarms) {
        alert("Maximum alarm limit reached.");
        return;
    }
    alarmTimesArray.push(selectedDate.toString());
    // Add logic to display and manage alarms
}

// Add event listeners
setAlarmButton.addEventListener("click", setAlarm);
setInterval(displayCurrentTime, 1000);
