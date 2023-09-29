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

    return (
        <div id="box">

            <Header />

            <main id="main-content">
                <WelcomeWorld />
            </main>

        </div>
    );
}

export default App;
