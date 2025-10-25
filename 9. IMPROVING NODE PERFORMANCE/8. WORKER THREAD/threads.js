const { isMainThread,
        Worker,
        workerData
      } = require('worker_threads')

if(isMainThread){
 console.log(`Main thread! Process ID: ${process.pid}`);
 new Worker(__filename, {
  workerData: [1,6,3,8,4,9,10]
 });
 new Worker(__filename, {
  workerData: [5,9,6,3,4,8,5]
 });
}else{
 console.log(`Worker thread! Process ID: ${process.pid}`);
 console.log(`${workerData} sorted is ${workerData.sort()}`);
}