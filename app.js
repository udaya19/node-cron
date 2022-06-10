const express = require('express');
const app = express();
const cron = require('node-cron');
const bodyParser = require('body-parser'); 
const res = require('express/lib/response');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true}));
app.post('/api/cron',(req,res)=>{
    let name=req.body.name;
    let desc=req.body.desc;
    let min=req.body.min;
    let hrs = req.body.hrs;
    let day_month = req.body.day_month;
    let month = req.body.month;
    let day_week = req.body.day_week;
    let repeat = req.body.repeat;
    let min_int = parseInt(min);
    let hrs_int = parseInt(hrs);
    let day_month_int = parseInt(day_month);
    let month_int = parseInt(month);
    let day_week_int = parseInt(day_week);
    // console.log(name);
    // console.log(desc); 
    if(repeat == '1'){
        console.log("Repeat");
        cron.schedule(`${min_int} ${hrs_int} * * *`,()=>{
            res.send("Task done!");
        })
    }
    else{
        console.log("No-repeat");
        cron.schedule(`${min_int} ${hrs_int} ${day_month_int} ${month_int} ${day_week_int}`,()=>{
            res.send("Task done!");
        })
    }
    const num_tasks = cron.getTasks();
    console.log(num_tasks);
});



app.listen(3000,()=>{
    console.log("Listening on port 3000");
})


