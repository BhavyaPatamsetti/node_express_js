console.log("Example node js application"); //you can also omit semicolon
console.log(2+6)
console.log("2"+8)
let a=10;
let b=10;
console.log(a+b);
let x=10, y= 20;
console.log(x+y);
let c=a+b;
console.log(c);

// given a word convert that to sorted alphabetical order
function alpha_sort(str) { 
    return str.split("").sort().join("");       
}

console.log("session".split());
console.log("ses sion".split(" "));

//callback functions
function verifylogin(user, pwd, callback){
    if(pwd == "pwd1"){
        callback(null, "correct login")
    }else{
        callback("Incorrect login", null)
    }
}

verifylogin("user1","pwd1",function(err, result){
    if(err){
        console.log("invalid");
    }else{
        console.log("valid user");
    }
})
// 2nd check
verifylogin("user1","pwd2",function(err, result){
    if(err){
        console.log("invalid");
    }else{
        console.log("valid user");
    }
})

//from 10th version to 16 th version callback function got updated
verifylogin("user1","pwd2",(err, result)=>{
    if(err){
        console.log("invalid");
    }else{
        console.log("valid user");
    }
})

console.log("program is starting");

setTimeout(()=> {
    console.log("Inside timeout");
}, 2000);

console.log("after time out");
console.log("program ending");

//only fs, os, console are the only 3 modules