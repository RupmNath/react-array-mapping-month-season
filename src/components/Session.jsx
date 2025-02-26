const Session = ({ sessionName, SessionDescription, aboutMore}) => {
    return (
        <>
            <div class="card">
                <img src="..." class="card-img-top" alt="..."></img>
                <div class="card-body justify-content-center align-item-center text-center">
                    <h1 class="card-title">{sessionName}</h1>
                    <p class="card-text">{SessionDescription}</p>
                    <a className="col-8 flex-grow-1" href="#" class="btn btn-primary">{aboutMore}</a>
                </div>
            </div>
        </>
    )
}

export default Session;