import React from "react"
import ReactDOM from 'react-dom/client'

function NotApp(){
    const firstName = "Mairaj"
    const lastName = "Pirzada"

    const date1 = new Date()
    const hours = date1.getHours() % 12
    let greeting
    
    if(hours > 12){
        greeting = "morning"
    } else if (hours >= 12 && hours < 17){
        greeting = "afternoon"
    } else {
        greeting = "night"
    }

    return (
        <>
            <p>Hello {firstName} {lastName}, it's time {date1.getFullYear()}!</p>
            <p>Hello {firstName} {lastName}, it's time {new Date().getHours() % 12}!</p>
            <p>Good {greeting}</p>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <NotApp />
    </React.StrictMode>
)