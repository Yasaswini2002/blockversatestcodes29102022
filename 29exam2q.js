function getDays(date1, date2) 
{
    var oneDay = 24 * 60 * 60 * 1000; 
    return Math.round((date2 - date1) / oneDay);
}
console.log(getDays(new Date("December 29, 2018"), new Date("January 1, 2019")));
