
function Component({question,answer,dispatch,numquestions}) {
   const  hasanswered =answer!==null
    
   return (
        <div>
            <h4>{question.question}</h4>
            <div className="options">{question.options.map((el,i)=>
            <button  className={`btn btn-option ${ i===answer? "answer":""} 
            ${hasanswered ? i===question.correctOption ? 'correct':'wrong':''}`}
            disabled={hasanswered? true :false}
            key={el} onClick={()=>dispatch({type:'newanswer',payload:i})}>{el}</button>)}</div>
        </div>
    )
}

export default Component
