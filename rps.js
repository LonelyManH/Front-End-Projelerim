const rock=document.getElementById("rock")
const paper =document.getElementById("paper")
const scissor=document.getElementById("scissor")
const pcpoint=document.getElementById("pcpoint")
const playerpoint=document.getElementById("playerpoint")
const playerchoice=document.getElementById("playerchoice")
const pcchoice=document.getElementById("pcchoice")
const choices=["Rock","Paper","Scissor"]
var losses=0
var draws=0
var wins=0

rock.addEventListener("click",()=>{
    let pc=choices[Math.floor(Math.random()*2)]
    if(pc=="Rock"){
        draws+=1
        alert("Draw")
    }
    else if(pc=="Paper"){
        losses+=1
        pcpoint.innerText=losses
        playerchoice.innerText="Rock"
        pcchoice.innerText=pc
    }
    else{
        wins+=1
        playerpoint.innerText=wins
        playerchoice.innerText="Rock"
        pcchoice.innerText=pc
    }
})

paper.addEventListener("click",()=>{
    let pc=choices[Math.floor(Math.random()*2)]
    if(pc=="Rock"){
        wins+=1
        playerpoint.innerText=wins
        playerchoice.innerText="Paper"
        pcchoice.innerText=pc   
    }
    else if(pc=="Paper"){
        draws+=1
        alert("Draw")              
    }
    else{
        losses+=1
        pcpoint.innerText=losses
        playerchoice.innerText="Paper"
        pcchoice.innerText=pc
    }
})
scissor.addEventListener("click",()=>{
    let pc=choices[Math.floor(Math.random()*2)]
    if(pc=="Rock"){
        losses+=1
        pcpoint.innerText=losses
        playerchoice.innerText="Scissor"
        pcchoice.innerText=pc
    }
    else if(pc=="Paper"){
        wins+=1
        playerpoint.innerText=wins
        playerchoice.innerText="Scissor"
        pcchoice.innerText=pc
    }
    else{
        draws+=1
        alert("Draw")
    }
})

