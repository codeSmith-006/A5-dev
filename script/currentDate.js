function currentWeekday() {
    const currentWeek = new Date();
    const options = { weekday: 'long'};
    document.getElementById("current-weekday").textContent = currentWeek.toLocaleDateString('en-US', options);
}
currentWeekday();

function currentDate() {
    const currentDate = new Date();
    const options = {day: 'numeric', month: 'long', year: 'numeric' };
    document.getElementById("current-date").textContent = currentDate.toLocaleDateString('en-US', options);
}
currentDate();

