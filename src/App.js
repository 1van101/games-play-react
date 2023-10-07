import { useState } from 'react';
import {
    Routes,
    Route,
    Link,
} from "react-router-dom";


import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld/WelcomeWorld";
import CataloguePage from "./components/GameCatalogue/CataloguePage";
import CreateGame from "./components/CreateGame";
import Login from "./components/Login";
import Register from './components/Register';
import ErrorPage from './components/ErrorPage';
import GameDetails from './components/GameDetails';

function App() {
    const [page, setPage] = useState('/home');

    return (
        <div id="box">

            <Header

            />

            <main id="main-content">
                
                    <Routes>
                        <Route path="/" element={<WelcomeWorld />} />
                        <Route path="/games" element={<CataloguePage />} />
                        <Route path="/create-game" element={<CreateGame />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/games/:gameId" element={<GameDetails />} />
                    </Routes>
                
            </main>

        </div>
    );
}

export default App;