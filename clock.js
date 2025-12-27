let hour=document.getElementById("hour")
let minute=document.getElementById("minute")
let second=document.getElementById("second")


setInterval(()=>{
    // let day=localDate.get
    let localDate=new Date()
    let hou=localDate.getHours()
    let min=localDate.getMinutes()
    let sec=localDate.getSeconds()
    // console.log(`H:${hou} M:${min} S:${sec}`)
    
    // h.textContent=hou
    // m.textContent=min
    // s.textContent=sec
    if(sec<10){
        second.innerText=`0${sec}`
    }
    else{
        second.innerText=sec
    }
    if(hou>12){
        hour.innerText=`0${hou-12}`
    }
    else{
        hour.innerText=hou
    }
    if(min<10){
        minute.innerText=`0${min}`
    }

    else{
        minute.innerText = min
    }


})