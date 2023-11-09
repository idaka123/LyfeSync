export const dateConvert = (dateMilli) => {

    const valid = isDateString(dateMilli)
    // console.log("dateMilli", dateMilli, valid)


    // if (isDateString(dateMilli) ) {
        var d = (new Date(dateMilli) + '').split(' ');
        return [d[2], d[1]].join(' ');
    // }
    // else return dateMilli

    
}


export function isDateString(dateString) {
    const validFormat = /^\w{3} \w{3} \d{2} \d{4} \d{2}:\d{2}:\d{2} GMT[+-]\d{4} \(.+\)$/;

    if (validFormat.test(dateString)) {
      return true;
    } else {
      return false;
    }
  }

export function compareDates(date1, date2) {
  // Set time to zero for both dates
  date1.setHours(0, 0, 0, 0);
  date2.setHours(0, 0, 0, 0);

  if (date1 < date2) {
    return -1;
  } else if (date1 > date2) {
    return 1;
  } else {
    return 0;
  }
}

export const convertUpperCase = (string) => {
  const upperCase = string.toUpperCase()
  console.log(upperCase)
  return upperCase
}

export const convertDates = (dateArray) => {
    return dateArray.map(dateStr => {
        let date = new Date(dateStr);
        return date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();
    });
}

export const  getRecentSevenDates = (array) => {
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var now = new Date(); 
  var dates = array.map(date => new Date(date))

  var orderedDates = weekDays.map((day,index) => {
    var dateInWeek = dates.find(date => date.getDay() === (now.getDay() + index + 1) % 7);
    return dateInWeek ? dateInWeek.toString() : null;
  });

  return orderedDates;
}