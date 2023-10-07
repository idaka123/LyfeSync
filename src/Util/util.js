export const dateConvert = (dateMilli) => {

    if (isDateString(dateMilli)) {
        var d = (new Date(dateMilli) + '').split(' ');
        return [d[2], d[1]].join(' ');
    }
    else return dateMilli

    
}


export function isDateString(dateString) {
    // Create a regex pattern to match the date format
    const pattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
  
    // Use the test() method to check if the string matches the pattern
    const isDate = pattern.test(dateString);
  
    return isDate;
  }
  