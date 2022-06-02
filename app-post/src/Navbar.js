import { Link } from 'react-router-dom';

/**
 * 
 * @returns This is the file for the navbar of the website.
 */

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Sunjo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;