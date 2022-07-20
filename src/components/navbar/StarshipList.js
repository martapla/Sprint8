
import {useEffect,useState} from 'react';
import axios from 'axios'


function StarshipList (){
    const [starships, setStarships] = useState([]);
    const [nextPage, setNextPage] = useState();
    const [page, setPage] = useState(1);

    async function loadApi(){
        const response = await axios(nextPage ? nextPage : "https://swapi.py4e.com/api/starships");
        const data = await response.data;
        const mappedResults = data.results.map(
            result => {
                const urlSplitted = result.url.split('/')
                result.id = urlSplitted.at(-2)
                return result
            }
        );

        setStarships(mappedResults);
        setNextPage(data.next);
    }

    useEffect(() => {
        loadApi()
    }, [page])

    return (
       
        <div>
            {starships.map(starship => {
                return <a href={`/starship/${starship.id}`} key={`starship-${starship.id}`}>
                    <div className ="boxName">
                        <h1 >{starship.name}</h1>
                        <h2>{starship.model}</h2>
                    </div>
                </a>
            })}
            <div>
                {
                    nextPage && 
                        <button onClick={() => setPage(page + 1)}> View more </button>
                }
            </div>
        </div>
    );
}
export default StarshipList;

