// npm install -g json-server
// let container=document.getElementById("container")
// fetch("http://localhost:3000/login")
// .then(res=>res.json())
// .then(data=>console.log(data))

// function postData(){
//     let options={
//     method:"POST",
//         header:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify({
//             "quote":"hello i am passing the data into the jso-server",
//             "author":"riya"
//         })
// }
//     fetch("http://localhost:3000/POST",options)
//         .then(res=>{
//             if(res.ok){
//                 console.log("data is posted in the json-server")
//                 return res.json()
//             }

//         })
//         .then(data=>console.log(data))
// }
// postData()
// let input1=document.getElementById("input1")
// let input2=document.getElementById("input2")
// let btn=document.getElementById("btn")
// console.log(input1,input2,btn)
// input lo data submit indha ledha ani check cheyadaniki

// function postdata(){
//     fetch("http://localhost:3000/POST",{
//         method:"POST",
//         header:{
//             "Content-Type":"application/json"
//     },
//         body:JSON.stringify({
//             quote:input1.value,
//             author:input2.value
//         })
//     })
//     .then(res=>{
//         if(res.ok){
//             console.log("data posted")
//             input1.value=""
//             input2.value=""
            
//         }
//     })

// }
// btn.addEventListener("click",postdata)

// by default we have GET FOR fetch
// fetch("http://localhost:3000/product")
// .then(response=>{
//     if(response.ok){
//         return response.json()
//     }
// }).then(data=>{
//     for(obj of data){
//         console.log(obj.id)
//     }
           
// })
    
// .catch((err)=>console.error(err))
                                                 // to show data in ui
let container=document.getElementById("container");

let btn2=document.getElementById("btn2")
                                      
function getdata(){
    fetch("http://localhost:3000/product")
    .then(res=>res.json())
    .then(data=>{
        for ( let object of data){
            // console.log(object)
            let item=document.createElement("div")
            item.id="item"
            item.className="item"
            // console.log(item)
            let h3=document.createElement("h3")
            h3.textContent=object.id

            // para
            let p=document.createElement("p")
            p.textContent=object.quote


            let h6=document.createElement("h6")
            h6.textContent=`${object.author}....`


            let btn=document.createElement("button")
            btn.textContent="delete"

            //  delete method
                btn.addEventListener("click",function(){
                    // console.log(object.id)
                    deletedata(object.id)
                })
            item.append(h3,p,h6,btn)
            container.appendChild(item)
            


        }
    })

}
// item should be deleted
function deletedata(id){
    console.log(id)
    fetch(`http://localhost:3000/product/${id}`,{
        method:"DELETE"
    })
    .then(res=>{
        if(res.ok){
            console.log("data is deleted")
            return res.json()
        }

    })
    // .then(res=>res.json())


    //  to store deleted data in somewhwre in end point
    .then(data=>{
        fetch(`http://localhost:3000/delete`,{
            method:"POST",
            headers:{
                "Content-Type":"aplication/json"

            },
            body:JSON.stringify(data)
        }).then(res=>{
            if(res.ok){
                console.log("data is added inside teh delete")
            }
        })
    })

}

            
// post data
function postdata(){
    let input1=document.getElementById("input1")
    let input2=document.getElementById("input2")
    fetch("http://localhost:3000/product",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
    },
        body:JSON.stringify({
            quote:input1.value,
            author:input2.value
        })
    })
    .then(res=>{
        if(res.ok){
            console.log("data added")
            return res.json()
            // input1.value=""
            // input2.value=""
            
        }
    })

}
btn2.addEventListener("click",postdata)

getdata()

// rapid api's
// async and await
// =>it is fun 
// =>await => promise obj ni  resolve chesthundhi
// async function one(){
//     retunr new Promise((res,rej))
//     console.log("a")
//     let pro=await
// }
// one()

