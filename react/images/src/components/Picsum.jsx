const RandomImage = ({ width = 300, height = 200 }) => {
    const imgUrl = `https://picsum.photos/${width}/${height}`

    return (
        <div>
            <h1>Random Picture</h1>
            <img src={imgUrl} alt="random" />
        </div>
    )
}

export default RandomImage