import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";


//trough this function specific blogpost are fetched, by "id"
const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();


    //Deleting a post
    const handleClick= () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }) .then(() => {
            history.push('/');
        })
    }

    //Editing a post -does not work yet
    const handleClick2= () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'GET'
        }) .then(() => {
            history.push('/');
        })
    }


    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>Delete</button>
                    <button onClick={handleClick2}>Edit</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;