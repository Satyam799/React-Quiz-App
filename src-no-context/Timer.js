import { useEffect } from "react"

function Timer({tick,dispatch}) {
useEffect(function(){
 const id=  setInterval(()=>dispatch({type:'tick'}),1000) 
return ()=>clearInterval(id)
},[dispatch])   
    
const miniut=Math.floor(tick/60)
const sec=Math.floor(tick%60)

return (
        <div className="timer">{miniut<10?0:''}{miniut}:{sec<10?0:''}{sec}</div>
    )
}

export default Timer
