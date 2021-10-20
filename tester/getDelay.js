function getDelay(milliSeconds){
    return new  Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },milliSeconds)
    })
}
module.exports =getDelay;