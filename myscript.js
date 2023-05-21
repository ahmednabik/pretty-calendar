let selectedMonthElement = document.querySelector("select");
let daysList = document.getElementById("days");
let test = document.getElementById("test");

selectedMonthElement.addEventListener('change', populateCalender);


function populateCalender() {
    daysList.innerHTML = "";
    let numberOfDays = daysCalculator(selectedMonthElement.value);
    let dayDisplacementNumber = calculateFirstDay(selectedMonthElement.value);



    document.getElementById("test").innerHTML = calculateFirstDay(selectedMonthElement.value);

    if (dayDisplacementNumber > 0) {
        for (; dayDisplacementNumber > 0; dayDisplacementNumber--) {
            const listItem = document.createElement('li');
            listItem.textContent = "";
            daysList.appendChild(listItem);
        }
    }

    for (let i = 1; i <= numberOfDays; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = i;
        daysList.appendChild(listItem);
    }
}




function daysCalculator(month) {


    if (month == "jan" || month == "mar" || month == "may" || month == "jul" || month == "aug" || month == "oct" || month == "dec") {
        return 31;
    }
    else if (month == "apr" || month == "jun" || month == "sep" || month == "nov") {
        return 30;
    }
    else {
        return 28; //for february only
    }

}

function calculateFirstDay(month) {
    let firstDate = month + '1, 2023';
    const date = new Date(firstDate);
    return date.getDay();
}
