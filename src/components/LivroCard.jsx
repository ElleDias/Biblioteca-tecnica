const LivroCard = (props) => {
    return (
        <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <h2>{props.titulo}</h2>
            <p>Autor:{props.autor}</p>
            <p>Idioma:{props.idioma}</p>
            <p>Dowloads:{props.dowloads}</p>
        </div>
        
    )
}

export default LivroCard;