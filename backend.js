let http=require("http");
let fs=require("fs");
let requests=require("requests");
let homeFile=fs.readFileSync("home.html","utf-8");
let modifiedData=(previousVal,currentVal)=>{
    let temperature=previousVal.replace("{%cityName%}",currentVal.name);
    temperature=temperature.replace("{%countryName%}",currentVal.sys.country);
    temperature=temperature.replace("{%tempStatus%}",currentVal.weather[0].main);
    temperature=temperature.replace("{%tempVal%}",parseFloat(currentVal.main.temp-273.15).toFixed(2));
    temperature=temperature.replace("{%tempMin%}","Min "+parseFloat(currentVal.main.temp_min-273.15).toFixed(2));
    temperature=temperature.replace("{%tempMax%}","Max "+parseFloat(currentVal.main.temp_max-273.15).toFixed(2));
    return temperature;
}
let server=http.createServer((req,res)=>{
    if(req.url=="/"){
        requests("https://api.openweathermap.org/data/2.5/weather?q=Shimla&appid=394acb56d2a263b82a39a711a65b2bd8")
        .on("data",(chunk)=>{
            let objFile=JSON.parse(chunk);
            let arrayData=[objFile];
            let realTimeData=arrayData.map((ele)=>modifiedData(homeFile,ele)).join("");
            res.write(realTimeData);
            //console.log(realTimeData);

        })
        .on("end",(err)=>{
            if(err)
                return console.log("Connection close due to errors",err);
            
        });
    }
});
server.listen(8000,"127.0.0.1");