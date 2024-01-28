import { Quizuse } from "./Quizcontext"

function NextButton() {
   const {dispatch,answer,numquestions,index}=Quizuse()

   if(answer===null)return null
    
   if(index< numquestions-1)
   return (
       <button className="btn btn-ui" onClick={()=>dispatch({type:'nextaction'})}>Next</button>
    )
    if(index=== numquestions-1)
    return(
      <button className="btn btn-ui" onClick={()=>dispatch({type:'finished'})}>Finish</button>
   
      )
}

export default NextButton
