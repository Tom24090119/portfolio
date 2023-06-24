import './css/navBar.css'

export default function NavBar(){
    return(
        <header class = "nav-bar">
            <span>AARYAMAN </span>
            <nav>
                <ul className ="nav__links" id="nav-links">
                    <li><a href="/">About Me</a></li>
                    <li><a href="/">My Experience </a></li>
                    <li><a href="/">My projects </a></li>
                </ul>
            </nav>
            <a class ="cta" href="/" >
                <button>
                    Resume
                </button>
            </a>
        </header>
    )
}