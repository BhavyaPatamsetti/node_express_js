// // // var fs = require('fs')

// // // fs.readFile("./text.txt",function(err, data){
// // //     if(err){
// // //         console.log("error in reading file");
// // //     }else{
// // //         console.log(data);
// // //     }
// // // })
// // // //for getting text format
// // // fs.readFile("./text.txt","utf8",function(err, data){
// // //     if(err){
// // //         console.log("error in reading file");
// // //     }else{
// // //         console.log(data.toUpperCase());
// // //     }
// // // })
// // //require is used to import module

// // var os = require('os')
// // console.log(os.hostname());
// // console.log(os.totalmem());
// // console.log(os.freemem());
// // console.log(os.version());
// // console.log(os.endianness());
// // console.log(os.loadavg());
// // console.log(os.type());
// // console.log(os.homedir());

// // // npm install packagename --save ==> for installing packages

// var cowsay = require('cowsay')
// console.log(cowsay.say({text: "example text"}));
// console.log(cowsay.say({text: "example text", e:"%%", T:"&&"}));
// console.log(cowsay.say({text: "example text", e:"%%", T:"**"}));


//chalk module
// import chalk from 'chalk';

// console.log(chalk.blue('Hello world!'));

// var calci=require('./calci')
// console.log(calci.add(12,13));
// console.log(calci.sub(12,3));
// console.log(calci.mul(2,13));
// calci.div(12,0,(err, result)=>{
//     if(err)
//         console.log(err)
//     else
//         console.log(result)
// })

// var book = {title:"Core Java", author:"Herbert", price:500, publisher:"tata mcgrill", pages:1200}
// var jsonbook = JSON.stringify(book)
// console.log(jsonbook)
// var bookobj = JSON.parse(jsonbook)
// for(ele in bookobj){
//     console.log(ele);
//     console.log(ele+":"+bookobj[ele]);
// }

// chalk
var chalk = require('chalk');
console.log(chalk.blue("Hello"))
console.log(chalk.blue("Hello") + " World" + chalk.red("!"));
console.log(chalk.bgRed("Hii..."));

