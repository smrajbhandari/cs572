const {resolve4} = require('dns');
const {promisify}= require('util');
resolve4("www.mum.com",(err,add)=>console.log("From simple way ==> "+add));

var printIp= promisify(resolve4);
printIp("www.mum.com")
.then((add)=>{console.log("From promisify ==> "+add)});

async function printIpfun(){
    try{
        const text = await printIp("www.mum.com");
        console.log("From async/await ==> "+text);
        }catch(err){
            console.log("From async/await error ==> "+err);

        }
}

printIpfun();