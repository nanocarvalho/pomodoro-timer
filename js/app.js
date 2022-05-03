const seconds = document.getElementById('seconds') 
const minutes = document.getElementById('minutes')
const start = document.getElementById('btn')
const reset = document.getElementById('reset')

//check if it's counting 
let counting = false


//start button
start.addEventListener('click', () => {
    if(!counting) {
        counting = true
        pomodoroTimer()
    } else{
        alert('Please insert/reset the time')
    } 
})

function pomodoroTimer() {
    //the value of the user input
    let userSeconds = document.getElementById('user-seconds').value
    let userMinutes = document.getElementById('user-minutes').value

    //a simple validation to not exceed 59:59
    userSeconds = userSeconds > 59 ? userSeconds = 59 : userSeconds
    userMinutes = userMinutes > 59 ? userMinutes = 59 : userMinutes

    //multiply the minutes by 60 to transform in seconds, and sum with the seconds
    let pomodoroTime = (userMinutes * 60) + (userSeconds % 60)
    
    //to prevent the input being 0 and triggering the alert
    pomodoroTime = pomodoroTime === 0 ? counting = false : pomodoroTime

    //For reseting the time
    reset.addEventListener('click', () => {
        pomodoroTime = 0 
        counting = false
    })

    let timeCount = setInterval(function(){


        let pomodoroSeconds = pomodoroTime % 60 //The remainder of the division, is the seconds
        let pomodoroMinutes = Math.floor(pomodoroTime / 60) //dividing by 60 we get the minutes
    
        //format the text to add the 0 
        pomodoroSeconds = pomodoroSeconds < 10 ? '0' + pomodoroSeconds : pomodoroSeconds
        pomodoroMinutes = pomodoroMinutes < 10 ? '0' + pomodoroMinutes : pomodoroMinutes


        //every loop, we subtract 1 second
        pomodoroTime--

        
        //Update the counter in the html
        seconds.textContent = pomodoroSeconds
        minutes.textContent = pomodoroMinutes

        //stops the loop when reaches 0
        if(pomodoroTime < 0) {
            clearInterval(timeCount)
            counting = false
        }
    }, 1000)
}




