import { useEffect, useState } from 'react';
import * as gameService from '../../services/gameService';
import GameCard from './GameCard';


const CataloguePage = ({
    navigationChangeHandler
}) => {
    const [games, setGames] = useState([])
    console.log(games)
    useEffect(() => {
        gameService.getAllGames()
            .then(gamesResult => {
                setGames(gamesResult);
            })
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {games.length > 0
                ? games.map(g => <GameCard key={g._id} game={g} navigationChangeHandler={navigationChangeHandler} />)
                : <h3 className="no-articles">No games yet</h3>
            }


        </section>
    )
}

export default CataloguePage;