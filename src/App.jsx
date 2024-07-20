import { useState } from "react";
import "./App.css";
import History from "./components/History";
import Menu from "./components/Menu";
import Profile from "./components/Profile";

function App() {
    const [selectedMenu, setSelectedMenu] = useState("profile");

    return (
        <div className="App">
            <header>
                <h2>Menu</h2>
                <Menu setSelectedMenu={setSelectedMenu} />
            </header>
            <main>
                <h2>Content</h2>
                {selectedMenu === "profile" && <Profile />}
                {selectedMenu === "history" && <History />}
            </main>
        </div>
    );
}

export default App;
