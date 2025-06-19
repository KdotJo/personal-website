import './navbar.css'
function Navbar() {
    return (
        <div className="navbar">
            <h1>Kalo Jo</h1>
            <div className="navbar-links">
                <a href="index.html" title="Home">Home</a>
                <a href="about.html" title="About">About</a>
                <a href="projects.html" title="Projects">Projects</a>
            </div>
        </div>
    )

}

export default Navbar