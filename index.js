const cron = require('node-cron');
const isvalid = cron.validate('59 * * * *');
console.log(isvalid);
// cron.schedule('* * * * *',()=>{
//     console.log("running every minute");
// })
// cron.schedule('43-45 * * * *', () => {
//     console.log('running 43-45minutes past the hour');
// });
// cron.schedule('*/2 * * * *', () => {
//     console.log('running for every 2 minutes');
// });
// cron.schedule('0 11 * Jun Wed', () => {
//     console.log('At 11:00 AM, only on Wednesday, only in June');
// });
// var task = cron.schedule('* * * * *', () =>  {
//     console.log('stopped task');
//   }, {
//     scheduled: false
//   });
  
//   task.start();
// cron.schedule('30 15 * * * *',()=>{
//     console.log("At 30 seconds past the minute, at 15 minutes past the hour")
// })

// var task = cron.schedule('* * * * *', () =>  {
//     console.log('will execute every minute until stopped');
// });
  
// task.stop();
// task.start();

// cron.schedule('*/3 * * * * *',()=>{
//     console.log("HEllo")
// })