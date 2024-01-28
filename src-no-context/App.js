import { useEffect, useReducer } from 'react'
import Headers from './Header'
import Main from "./Main"
import Loader from './Loader'
import Error from './Error'
import Startscreen from './startscreen'
import Questions from './Questions'
import NextButton from './Nextbutton'
import Progress from './Progress'
import Finisshed from './Finisshed'
import Footer from './Footer'
import Timer from './Timer'
const intialstate={questions:[],status:'loading',index:0,answer:null,points:0,highscore:0,tick:null}


function reducer(state,action){
  switch(action.type){
  case 'datareceived':
    return {...state,questions:action.payload,status:'ready',tick:state.questions.length*30}
  case 'error':{
return {...state,status:'error'}
  }
  case 'active':
    return {...state,status:'active'}

  case 'newanswer':
    const questionss=state.questions.at(state.index)
    return {...state , answer:action.payload,points:questionss.correctOption===action.payload?state.points+questionss.points:state.points}  
  case 'nextaction':
   //state={...intialstate,index:state.index}
    return {...state,index:state.index+1,answer:null}
  case 'finished':
    return {...state,status:'finished',highscore:state.highscore > state.points ? state.highscore : state.points}
case 'Reset':
  return {...intialstate,status:'ready',questions:state.questions,highscore:state.highscore}
case 'tick':
  return {...state,tick:state.tick-1,status:state.tick===0? 'finished':state.status}  
  
  default:
     throw new Error("Action unknown")
    }

  }
export default function App(){
const [{questions,status,index,answer,points,highscore,tick},dispatch]= useReducer(reducer,intialstate)

const numquestions=questions.length

const maxnoofpoints=questions.reduce((prev,curr)=>prev+curr.points,0)
useEffect(function(){
 async function fetched(){
  try{ 
    const hi=await fetch(`http://localhost:8000/questions`)
    const data=await hi.json()
    dispatch({type:'datareceived',payload:data})
  }catch(err){
    dispatch({type:'error'})
  }
  }
  fetched()
  },[])
 
 
 return <div className="app">
  <Headers/>
  <Main>
{status==='loading' && <Loader/>}
{status==='error' && <Error/>}
{status==='ready' && <Startscreen numquestions={numquestions} dispatch={dispatch}/> }
{status==='active' && (<>
<Progress numquestions={numquestions} index={index} points={points} 
maxnoofpoints={maxnoofpoints} answer={answer}/>
<Questions question={questions[index]} 
dispatch={dispatch} answer={answer} /> 
<Footer>
<Timer tick={tick} dispatch={dispatch}/>
<NextButton dispatch={dispatch} 
answer={answer} numquestions={numquestions} 
index={index} points={points} />
</Footer>
</>
)}
{status==='finished' && <Finisshed points={points} maxnoofpoints={maxnoofpoints} highscore={highscore} dispatch={dispatch}/>}
  </Main>
  </div>
}