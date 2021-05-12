import Thumbnail from "./Thumbnail"

function Results({results}) {
    return (
        <div>
            {
                results.map(movie => (
                    <Thumbnail key={movie.id} result={movie}/>
                ))
            }
        </div>
    )
}

export default Results

