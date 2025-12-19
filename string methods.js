// string methods : allow you to manipulate and work with text 
//    charAt(index)
let str="hello world! 123456"
// console.log(str.charAt(5))   
// o/p:a
     


//    charcodeAt(index)=>returns ascii values
// console.log(str.charCodeAt(5))
// o/p:97


// concat(str1,str2...)
// let str2="pinky"
// let str3="chinky"
// console.log(str.concat(str2,str3))
// o/p:yokshapinkychinky


// includes(searchstring,position) it returns true or false
// console.log(str.includes("w",2)) 
// 2 is the position from where to start nothing happens if we not gave also
// console.log(str.includes("python"))


// indexof(searchstring,position) it returns default -1 if not found
// console.log(str.indexOf("l",4))
// o/p:9


// lastindexof(searchstring,position)
// console.log(str.lastIndexOf("l",4)).


// match(regex)
// console.log(str.match(/hello/))
// it returns array it present  if not returns null


// matchAll(regex)
// let newvalue=[...str.matchAll(/hello/g)]
// console.log(newvalue[0][0])



// padend
// let num="+9191"
// console.log(num.padEnd(13,'X'))


// padstart
// let num="9191"
// console.log(num.padStart(12,'X'))



// replace
// console.log(str.replace("l","w"))
// replace only the first come

// console.log(str.replaceAll("l","w"))
// replace all


// search(regex) index value
// console.log(str.search("w"))

// slice(start,end)
// console.log(str.slice(0,9))
// return value based on index



// substring(start,end)
// console.log(str.substring(6,10))
// this gives index

// substr(start,end)
// console.log(str.substr(6,10))
// this gives length start from 6  and gives 10 values



// split
// console.log(str.split(""))
// return chars in array 


// console.log(str.split(" "))
// // return element in array 

// trim
// let text="        hello      "
// console.log(text.trim())
// trim starting and ending

// console.log(text.trimStart())
// /trims at starting only

// console.log(text.trimEnd())
// trims at ending




// uppercase
// console.log(str.toUpperCase())

// lowercase
// console.log(str.toLowerCase())


// length
// console.log(str.length)

// startswith
// console.log(str.startsWith("he"))
// endswith
// console.log(str.endsWith("6"))