const Menu = ({ setSelectedMenu }) => {
    return (
        <nav>
            <ul>
                <li onClick={() => setSelectedMenu("profile")}>Profile</li>
                <li onClick={() => setSelectedMenu("history")}>History</li>
            </ul>
        </nav>
    );
};

export default Menu;
