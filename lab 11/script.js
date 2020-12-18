function realtimeClock(){
    var rtClock = new Date();
    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();
    var year = rtClock.getFullYear();
    var a = rtClock.getDate();
    var month = new Array(12);
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var Month = month[rtClock.getMonth()];
    
    var weekday= new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var day = weekday[rtClock.getDay()];
  
  

     //Add AM and PM sysytem

    var amPm = ( hours < 12) ? "AM" : "PM";
    
    

    // Convert the hours component to 12-hours format 

    hours = (hours > 12) ? hours - 12 : hours;



    //display the clock 
    document.getElementById("clock").innerHTML =  hours + " : " + minutes + " : " + seconds + " : " + amPm  ;
    var t = setTimeout(realtimeClock, 500);
    document.getElementById("date").innerHTML = day + " " + a + " : " + Month + " : " + year ;
    
     
    
     
       
        
      










}