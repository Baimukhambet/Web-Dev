function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return days[date.getDay()];
}

let date = new Date(2022, 1, 16); 
alert(getWeekDay(date)); 