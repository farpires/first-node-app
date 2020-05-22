const path = require('path');
const fs = require('fs')

const exercise1 = (p1)=>{
    fs.readdir(p1,(err,files)=>{
        (err) ? console.log(err) 
        : 
        console.log(`exercise number One: ${files}`);
    });
}

const exercise2 = (p2)=>{
    fs.readdir(p2,(err,files)=>{
        (err)?console.log(err) 
        :
        files.map((file)=>{
            console.log(`exercise number two:${file}`)
        });
    });
}

const exercise3 = (p3)=>{
    fs.readdir(p3,(err,files)=>{
        (err)?console.log(err) 
        :
        files.reverse().map((file)=>{
            console.log(`exercise number three:${file}`)
        });
    });
}

const exercise4 = (p4,char)=>{
    let cont=0;
    fs.readdir(p4,(err,files)=>{
        (err)?console.log(err) 
        :
        files.map((file)=>{
            if(char==file.charAt(0)){
            cont++;
            console.log(`exercise number four,this file: ${file} found`);
            }
        });
        if(cont!=0){
            console.log(`exercise number four,I found  ${cont} file`);
        }
    });
}

module.exports.exercise1 = exercise1;
module.exports.exercise2 = exercise2;
module.exports.exercise3 = exercise3;
module.exports.exercise4 = exercise4;

