var bDay = new Date();
var date1 = bDay.getTime();
var dDay = new Date('December 25, 2500 23:15:31');
var date2 = dDay.getTime();

console.log(date2 - date1);

var minutes = (date2 - date1)/60000;
console.log(minutes);



bDay.setDate(bDay.getDate() - dDay.getDate());

var dateString1 = bDay.toDateString();
var dateString2 = dDay.toDateString();

console.log(dateString2 - dateString1);