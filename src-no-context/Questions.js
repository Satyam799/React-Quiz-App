import Component from "./component"
function Questions({question,answer,dispatch,numquestions}) {
  console.log(question,dispatch)
    return (<div>
        <Component question={question} dispatch={dispatch} answer={answer} numquestions={numquestions}/>
    </div>
        
    )
}

export default Questions
