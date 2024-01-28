function Progress({index,numquestions,points,maxnoofpoints,answer}) {
    return (
        <header className="progress">
            <progress max={numquestions} value={index + Number(answer !== null)}/>
            <p>Questions<strong>{index}</strong>/{numquestions}</p>
            <p><strong>{points}</strong>/{maxnoofpoints}</p>
        </header>
    )
}

export default Progress
