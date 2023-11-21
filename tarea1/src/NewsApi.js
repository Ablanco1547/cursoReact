import React from 'react'
import axios from "axios";


const baseURL = "https://newsapi.org/v2/top-headlines?country=ar&category=entertainment&apiKey=01b4a06adcc646038f497d9a903c48bc";


export const NewsApi = () => {

    const [noticias, setNoticias] = React.useState({

        "articles": [
            {
                "title": "Las mejores noticias de Argentina",
                "description": "Estan cargando las noticias mas frescas",
                "url": "",
            }
        ]
    });
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        console.log("Did mount")
        axios.get(baseURL).then((response) => {
            setNoticias(response.data)
        }).catch(error => {
            setError(error);
        });
    }, [])

    React.useEffect(() => {

    }, [noticias])

    if (error) return `Error: ${error.message}`;

    return (
        <React.Fragment>

            <h1 className='text-9xl text-center bg-yellow-600 py-10	'>Noticias de Argentina</h1>
            <section>
                {noticias.articles.map((noticia) => (
                    <div key={noticia.title}>
                        <h3>{noticia.title}</h3>
                        <p>{noticia.description}</p>
                        <p>Leer mas: <a href={noticia.url} target='blank'>aqui</a></p>
                    </div>
                ))}
            </section>

        </React.Fragment>
    )
}
