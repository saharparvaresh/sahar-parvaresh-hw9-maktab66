const timeToEatFunc = (mydate) => {
    let splitMyDate = mydate.split(":");
    let splitHour12MyDate = splitMyDate[splitMyDate.length - 1].split(" ");
    let newMyDateHour = splitMyDate[0];
    let newMyDateMin = splitHour12MyDate[0];
    let newMyDateHour12 = splitHour12MyDate[splitMyDate.length - 1];
    let timeRemArr = [];
    let nextTimeEat = "";
    let getNextTime;
    let date = new Date(null, null, null, newMyDateHour, newMyDateMin);
    let hour = date.getHours();
    let min = date.getMinutes();
    let hour12 = newMyDateHour12;
    let nextDate;

    if (hour12 == "a.m.") {
        if (hour <= 7) {
            nextTimeEat = "breakfast";
            getNextTime = 7;
            nextDate = new Date(null, null, null, getNextTime, 0);
        }
    } else if (hour12 == "p.m.") {
        if (hour <= 7) {
            nextTimeEat = "dinner";
            getNextTime = 7;
            nextDate = new Date(null, null, null, getNextTime, 0);
        } else if (hour <= 12) {
            nextTimeEat = "lunch";
            getNextTime = 12;
            nextDate = new Date(null, null, null, getNextTime, 0);
        }
    }

    let timeRem = Math.floor(Math.abs(nextDate.getTime() - date.getTime()) / 60000);
    let timeRemHour = Math.floor(Math.abs(nextDate.getTime() - date.getTime()) / 3600000);
    let timeRemMin = timeRem - (timeRemHour * 60);

    timeRemArr = [timeRemHour, timeRemMin];

    console.log(timeRemArr, `${hour}:${min} ${hour12}`);
    console.log(`${timeRemHour} hour and ${timeRemMin} minutes until the next meal, ${nextTimeEat}`);

}
timeToEatFunc("2:00 p.m.")