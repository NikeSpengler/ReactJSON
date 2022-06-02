import { Link } from 'react-router-dom';

/**
 * 
 * @returns This file is shown if the user types in a wrongly spelled address,
 * and lets the user back to the homepage. 
 */

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to='/'>Back to the homepage...</Link>
        </div>
     );
}
 
export default NotFound;