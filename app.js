const logger = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');

let pathObj = path.parse(__filename);
logger.log("path", pathObj);

let freeMem = os.freemem();
let totalMem = os.totalmem();

// console.log('free',freeMem);
// console.loglog('total',totalMem);

logger.log('free',freeMem);
logger.log('total',totalMem);

let rootDir = fs.readdirSync('./');

fs.readdir('.j/',(err,files)=>{
    (err) ? console.log(err): console.log('async',files);
});

console.log('sync',rootDir);


