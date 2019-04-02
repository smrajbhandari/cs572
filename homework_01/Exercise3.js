function isWeekend(){
  const todayDate = new Date();
    const day = todayDate.getDay()%6;
  switch(day){
    case 0:
      return "weekend"
    default:
    return "weekdays"
  }
}
console.log(isWeekend());