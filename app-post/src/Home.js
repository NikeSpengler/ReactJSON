import React, {useState} from 'react';
import BlogList from './BlogList';
import useFetch from "./useFetch";


const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    // const [query, setQuery] = useState('');

    // console.log(blogs.filter(blog => blog_title.includes('fe')));

   //searchform(foreign key) and the bloglist/ homepage
    return ( 
        <div className="home">
            {/* <div>
                <form className='search'>
                    <input type="text" name="term" placeholder="Search..." onChange={e => setQuery(e.target.value)}></input>
                    {blogs.map((blog) =>(
                        <li className='searchList'>{blog.title}</li>
                    ))}
                </form>
            </div> */}
            <div>
                { error && <div>{ error }</div>}
                { isPending && <div> Loading...</div> }
                {blogs && <BlogList blogs={blogs} title="All blogs"/>}
            </div>
        </div>
      
     );    
}


 
export default Home;