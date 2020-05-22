const logger = require('./logger');
const path = require('path'); // esta funcionalidad muestra lo que tiene un directorio expecifico
const os = require('os');//datos del sistema operativo en el que corre
const fs = require('fs');

const practice1 = require('./practice1');

/*practice1-----------------------------------------------------------*/
practice1.exercise1('./');
practice1.exercise2('./');
practice1.exercise3('./');
practice1.exercise4('./','p');
/*----------------------------------------------------------practice1-*/



// let pathObj = path.parse(__filename);
// logger.log("path", pathObj);

// let freeMem = os.freemem();
// let totalMem = os.totalmem();
// console.log('free',freeMem);
// console.loglog('total',totalMem);
// logger.log('free',freeMem);
// logger.log('total',totalMem);


// let rootDir = fs.readdirSync('./');
// console.log('sync',rootDir);

// fs.readdir('.j/',(err,files)=>{
//     (err) ? console.log(err): console.log('async',files);
// });
// console.log('sync',rootDir);


