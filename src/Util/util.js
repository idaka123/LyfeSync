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


export const updateRecentDates = (inputDates) => {
  const recentDates = [];

  // Helper function to format date to the desired string format
  const formatDate = (date) => {
    return date.toDateString() + ' ' + date.toTimeString().split(' ')[0] + ' GMT+0700 (Indochina Time)';
  };

  // Helper function to compare dates ignoring the time part
  const isSameDate = (date1, date2) => {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  };

  // Create recentDates array with the last 7 days
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    recentDates.push({ value: formatDate(date), check: false });
  }

  // Convert input dates to Date objects for easier comparison
  const inputDateObjects = inputDates.map(dateStr => new Date(dateStr));

  // Check and update the 'check' key if dates match
  recentDates.forEach(recentDateObj => {
    let recentDate = new Date(recentDateObj.value);
    if (inputDateObjects.some(inputDate => isSameDate(inputDate, recentDate))) {
      recentDateObj.check = true;
    }
  });

  return recentDates;
}
