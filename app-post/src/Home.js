import {useState} from "react";
import BlogList from './BlogList';


const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome home!', body: 'lorem ipsum...', author: 'nike', id: 2 },
        { title: 'My dev top tools', body: 'lorem ipsum...', author: 'yoshi', id: 3 }
    ]);
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All blogs" />
        </div>
     );
}
 
export default Home;