import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import CatalogPage from "./components/CatalogPage";
import CreateGame from "./components/CreateGame";

function App() {
    const routes = {
        '/home': WelcomeWorld,
        '/games': CatalogPage,
        '/create-game': CreateGame
    }

    const navigationChangeHandler = (path) => {
        console.log(path)
    }

    return (
        <div id="box">

            <Header
                navigationChangeHandler={navigationChangeHandler}
            />

            <main id="main-content">
                <WelcomeWorld />
            </main>

        </div>
    );
}

export default App;
