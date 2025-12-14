let container=document.getElementById("container")
// console.log(container)
function randomuser(){
    fetch("https://randomuser.me/api/")
    .then(response=>response.json())
    .then(user=>{
        let userdata=user.results
        console.log(userdata)
        for(values of userdata){
            console.log("Gender:",values.gender)
            console.log("Name:",values.name.first)
            console.log("Phone:",values.phone)
            console.log("Image:",values.picture.large)

            // creating the div inside the container
            let div=document.createElement("div")
            console.log(div)

            // creatig the image element
            let image=document.createElement("img")
            image.src=values.picture.large
            // console.log(image)


            // creating name element
            let name=document.createElement("h4")
            name.textContent=`Name: ${values.name.first}`


            // creating gender element
            let gender=document.createElement("h4")
            gender.textContent=`Gender: ${values.gender}`

            // creating phoneno element
            let phoneno=document.createElement("h4")
            phoneno.textContent=`Phoneno: ${values.phone}`

            // creating date of birth element
            let dateofbirth=document.createElement("h4")
            dateofbirth.textContent=`Date of Birth: ${values.dob.date}`




            // sending img into the div
            div.appendChild(image)


            // sending div into container
            container.append(div,name,gender,phoneno,dateofbirth)

        }
    })

}
randomuser()