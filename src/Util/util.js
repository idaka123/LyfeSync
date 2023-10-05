export const dateConvert = (dateMilli) => {
    var d = (new Date(dateMilli) + '').split(' ');

    return [d[2], d[1]].join(' ');
}