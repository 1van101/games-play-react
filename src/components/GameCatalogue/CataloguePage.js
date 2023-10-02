import { useEffect, useState } from 'react';
import GameCard from './GameCard';


const CataloguePage = () => {
    const [games, setGames] = useState([])
    console.log(games)
    useEffect(() => {
        fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc')
            .then(res => res.json())
            .then(gamesResult => {
                setGames(gamesResult)
            })
    }, [])

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {games.length > 0
                ? games.map(g => <GameCard key={g._id} game={g} />)
                : <h3 className="no-articles">No games yet</h3>
            }


        </section>
    )
}

export default CataloguePage;