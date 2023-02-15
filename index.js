//https://api.openweathermap.org/data/2.5/weather?q=varanasi&appid=394acb56d2a263b82a39a711a65b2bd8
let currDate=document.getElementById("date");
let weathercon=document.getElementById("weathercon");
let tempStatus="{%tempStatus%}";
if(tempStatus=="Sunny")
    weathercon.innerHTML="<i class='fas fa-sun' style='color: #eccc68'></i>";
else if(tempStatus=="Clouds")
    weathercon.innerHTML="<i class='fas fa-cloud' style='color: #dfe4ea'></i>";
else if(tempStatus=="Rainy")
    weathercon.innerHTML="<i class='fas fa-rain' style='color: #a4b0be'></i>";
else
    weathercon.innerHTML="<i class='fas fa-cloud' style='color: #dfe4ea'></i>";
let getCurrentDay=()=>{
    var a=new Array(7);
    a[0]="Sun";
    a[1]="Mon";
    a[2]="Tue";
    a[3]="Wed";
    a[4]="Thu";
    a[5]="Fri";
    a[6]="Sat";
    var day=new Date();
    let day1=a[day.getDay()];
    return day1;
};
let getCurrentTime=()=>{
    var months=[
        "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
    ];
    var time=new Date();
    var month=months[time.getMonth()];
    var date=time.getDate();
    var year=time.getFullYear();

    var hours=time.getHours();
    var minute=time.getMinutes();

    let periods='AM';
    if(hours>11){
        periods="PM";
        if(hours>12)
            hours-=12;
    }
    if(minute<10)
        minute="0"+minute;
    return `${month}${date} | ${hours}:${minute} ${periods}`;
};

currDate.innerHTML=getCurrentDay()+" | "+getCurrentTime();