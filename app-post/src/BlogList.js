import { Link } from 'react-router-dom';
import SearchTable from './SearchTable';

// const SearchTable = document.querySelector('.search');


//BlogList is connected to the BlogDetails.
const BlogList = ({blogs, title, term }) => {
    // if(term) {
    //     blogs += `&q=${term}`;
    // }


    return ( 
        <divc className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={ blog.id }>
                    <Link to={`/blogs/${ blog.id }`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </Link>
                </div>
            ))}
        </divc>
     );
}

// SearchTable.addEventListner('submit', (e) => {
//     e.preventDefault();
//     renderPosts(searchForm.term.value.trim());
// })
 
export default BlogList;