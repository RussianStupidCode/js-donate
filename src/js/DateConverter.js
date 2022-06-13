export default class DateConverter {
  static monthNames = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June",
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December",
  ];  

  static timeFormat(time) {
    return time < 10? `0${time}`: String(time);
  }
  
  static dateToString(date) {
    const month = DateConverter.monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const ampm = date.getHours() > 11 ? 'am': 'pm';
    const hour = DateConverter.timeFormat(date.getHours());
    const minute = DateConverter.timeFormat(date.getMinutes());
    const seconds = DateConverter.timeFormat(date.getSeconds());
    
    return `${month} ${day}th ${year}, ${hour}:${minute}:${seconds} ${ampm}`;
  }
};