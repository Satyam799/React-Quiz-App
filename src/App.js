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
import Component from './component'
import { Quizuse } from './Quizcontext'




export default function App(){
const {status}=Quizuse()
 return <div className="app">
 <Headers/>
 <Main>
{status==='loading' && <Loader/>}
{status==='error' && <Error/>}
{status==='ready' && <Startscreen /> }
{status==='active' && (<>
<Progress />
<Questions  /> 
<Footer>
<Timer />
<NextButton/>
</Footer>
</>
)}
{status==='finished' && <Finisshed />}
 </Main>
 </div>

}