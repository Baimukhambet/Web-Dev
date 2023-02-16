function getSecondsToTomorrow() {
    let today = new Date();
    let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate()+1);
    let subs = tomorrow - today; 
    return Math.round(subs / 1000); 
}