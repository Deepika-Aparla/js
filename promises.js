// with promises
function paymentfun(status){
    return new Promise((res,rej)=>{
        if(status){
            setTimeout(()=>{
                console.log("payment is done")
            res()  
            },1000)
                
        }else{
            rej("payment is not done")
        }

    })
}
function orderplace(status,res){
    return new Promise((res,rej)=>{
        if(status){
            setTimeout(()=>{
                console.log("order is placed")
                res()
            },2000)
        }else{
            rej("ordered is cancelled")
        }

    })
}
function shipping(status,res){
    return new Promise((res,rej)=>{
        if(status){
            setTimeout(()=>{
                console.log("order is shipped")
                res()
            },3000)
        }else{
            rej("ordered unable to ship")
        }

    })
}
function delivery(status,res){
    return new Promise((res,rej)=>{
        if(status){
            setTimeout(()=>{
                console.log("order is delivered")
                res()
            },4000)
        }else{
            rej("ordered unbale to deliver")
        }

    })
}


paymentfun(true).then(res=>orderplace(true,res)).then(res=>shipping(true,res)).then(res=>delivery(true,res)).then(res=>console.log("thanks for ordering"))
