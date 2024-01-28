function Finisshed({points,maxnoofpoints,highscore,dispatch}) {
    const percentage=(points/maxnoofpoints)*100
    let emoji = (percentage===100 && '🎖️') || ((percentage >50 && percentage<80) && '✌️' )|| (percentage===0 && '😔')

    return (
        <>
        <p className="result">
           <span>{emoji}</span>You scored <strong>{points}</strong> out of {maxnoofpoints} ({Math.ceil(percentage)}%) 
        </p>
        <p className="highscore">(Highscore: {highscore} points)</p>
        <button className="btn btn-ui" onClick={()=>dispatch({type:'Reset'})}>Restart Quiz</button>
        </>
    )
}

export default Finisshed
