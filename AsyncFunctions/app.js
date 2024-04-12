// const sing = async () => {
//     throw new Error("AHHHH)") 
//     return "LA LA LA "
// }


// sing()
//     .then(data => {
//         console.log("Promise Resolved with :" , data)
//     })
//     .catch(err =>{
//         console.log("Oh no promise rejected!")
//         console.log(err)
//     })

const delayedColorChange = (color,delay) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            document.body.style.backgroundColor = color
            resolve()
        }, delay)
    })
}
async function rainbow() {
   await delayedColorChange('red',1000)
   await delayedColorChange('blue',1000)
   await delayedColorChange('black',1000)
   await delayedColorChange('orange',1000)
   await delayedColorChange('green',1000)
   return "All done"
}

async function printRainbow () {
    await rainbow()
    console.log("Complete")
}

printRainbow()

const login = async (username, password) => {
    if (!username || !password ) throw "Missing Credentials"
    if(password === "corgiarecute") return "welcome"
    throw 'Invalid Password'
}


login("yuh","corgiarecute")
    .then(msg => {
        console.log("Logged in!")
        console.log(msg)
    })
    .catch (err => {
        console.log("error")
        console.log(err)
    })