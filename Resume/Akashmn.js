
$(document).ready(function(){
    function showTime(){

        const months = [31,28,31,30,31,30,31,30,31,30,31,30]
        var birthdayDate = new Date("2000,2,20, 12:00:00");
        let today = new Date();

       // returns the month (from 0 to 11)
         const month = birthdayDate.getMonth() + 1
         const year = birthdayDate.getFullYear()
         const day = birthdayDate.getDate();
         const hours = birthdayDate.getHours();
         const min = birthdayDate.getMinutes();
         const sec = birthdayDate.getSeconds(); 

         let todayYear = today.getFullYear();
         let todaymonth = today.getMonth()+1;
         let todaydays = today.getDate()
         let todayhours = today.getHours();
         let todaymin = today.getMinutes();
         let todaysec = today.getSeconds();

         var ageyear =   todayYear-year;
         var agemonth=0;
         var agedays=0;
         var agehours=0;
         var agemin= todaymin - min;
         var agesec = todaysec - sec;

         if(todaymonth>=month){
            agemonth = todaymonth-month;
        }else{
            ageyear--;
            agemonth=12+todaymonth - month;
        }

        if(todaydays>=day){
       agedays = todaydays-day
       }else{
       agemonth--;
       let days = 0;
       if(todaymonth==1){
            days = months[11]
       }else{
           days = months[todaymonth-1]
       }
       agedays = days+todaydays-day;
   }
   
   if(todayhours>=hours){
    agehours = todayhours-hours;
    }else{
     agehours = todayhours+hours;        
    }
   
    $("#years").text(ageyear);
    $("#months").text(agemonth)
    $("#days").text(agedays)
    $("#hours").text(agehours)
    $("#min").text(agemin);
    $("#sec").text(agesec);

    if(agesec==0){
     alert("1 minute Completed")
   
    }else{
     setTimeout(showTime,1000)
    }
    setTimeout(showTime,1000)        
    }
    showTime();
   })





