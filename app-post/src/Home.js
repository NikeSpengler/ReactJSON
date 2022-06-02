import React from 'react';
import BlogList from './BlogList';
import useFetch from "./useFetch";

/**
 * 
 * @returns This is the "Homepage" file, which together with 
 * BlogList let the user see all collected posts. 
 */

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    
    return ( 
        <div className="home">
            <div>
                { error && <div>{ error }</div>}
                { isPending && <div> Loading...</div> }
                {blogs && <BlogList blogs={blogs} title="All blogs"/>}
            </div>
        </div>
      
     );    
}


 
export default Home;