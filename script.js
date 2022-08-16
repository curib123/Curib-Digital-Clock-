/* Mag kuhaon ang mga id sa html */
let hour = document.getElementById('hour');
let  minute = document.getElementById('minutes');
let period = document.getElementById('period');
let month = document.getElementById('month');
let day = document.getElementById('day');
let year = document.getElementById('year');
let week = document.getElementById('week');

/* Maghimo ug Array */
let month_name= ["January","February","March","May","April","June","July", "August","September","October","November","December"];

let week_name=[
    "MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY ","SUNDAY"
];

/* maghimo ug date and time intervals */
let clock = setInterval(
    function time(){
        let date_now = new Date();
        
        let hours = date_now.getHours();
        let minutes = date_now.getMinutes();
        let months = date_now.getMonth();
        let days = date_now.getDate();
        let years = date_now.getFullYear();
        let weeks = date_now.getDay();
        
    
       
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (hours > 12) {
            hours = hours - 12;
            
             if (hours < 10) {
             hours = "0" + hours;
        }
            if(hours < 12) {
            period.textContent = "P.M";
                
            }else{
                period.textContent = "A.M";
            }
        }else {
            period.textContent = "A.M";
        }
        
        hour.textContent = hours;
        minute.textContent = minutes;
        month.textContent = month_name[months] + " ";
        day.textContent = days;
        year.textContent = years;
        week.textContent = week_name[weeks];
       
    }
    );
