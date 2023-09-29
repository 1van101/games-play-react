import { useState } from 'react';

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import CatalogPage from "./components/CatalogPage";
import CreateGame from "./components/CreateGame";

function App() {
    const [page, setPage] = useState('/home');

    const routes = {
        '/home': <WelcomeWorld />,
        '/games': <CatalogPage />,
        '/create-game': <CreateGame />
    }

    const navigationChangeHandler = (path) => {
        setPage(path)
    }

    return (
        <div id="box">

            <Header
                navigationChangeHandler={navigationChangeHandler}
            />

            <main id="main-content">
                {routes[page] || <h2>No Page Found!</h2>}
            </main>

        </div>
    );
}

export default App;
