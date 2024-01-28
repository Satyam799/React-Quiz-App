function Startscreen({numquestions,dispatch}) {
    return (
        <div>
            <div className="start">
                <h2>Welcome to the react Quiz!</h2>
                <h3>{numquestions} questions to test your React mastery</h3>
                <button className="btn btn-ui" onClick={()=>dispatch({type:'active'})}>Let's start</button>
            </div>
        </div>
    )
}

export default Startscreen
