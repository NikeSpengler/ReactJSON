import React, {useState} from 'react';
import { Link } from 'react-router-dom';

/**
 * 
 * @returns This code returns all the blogs from collected in the JSIN file.
 * There are also a "search" field where the user can search blogpots  by title. 
 */

//BlogList shows all blogs, at the top of the page there is a serach/filter functions by 'title'
const BlogList = ({blogs, title }) => {

    const [query, setQuery] = useState('');
    
    return ( 
        <div className="blog-list">
            <div className='search-input'>
                <input className='input-field' 
                    type="text" 
                    name="term" 
                    placeholder="Search..." 
                    onChange={(e) => setQuery(e.target.value)}
                ></input>
            </div>
            <div className='blog-list'>
                <h2>{ title }</h2>
                    {blogs.filter((blog) => 
                        blog.title.toLowerCase().includes(query)
                    ).map((blog) => (
                        <p key={blog.id} className='search-list'>
                             <Link to={`/blogs/${ blog.id }`}>
                                <h2>{ blog.title }</h2>
                                <p>Written by { blog.author }</p>
                            </Link>
                        </p>
                    ))}
            </div>
        </div>
     );
}

 
export default BlogList;