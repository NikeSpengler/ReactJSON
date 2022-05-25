import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";


//trough this function specific blogpost are fetched, by "id"
const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:3000/blogs/?_sort=id' + id);
    const history = useHistory();


    //Deleting a post
    const handleClick= () => {
        fetch('http://localhost:3000/blogs/' + blog.id, {
            method: 'DELETE'
        }) .then(() => {
            history.push('/');
        })
    }

    //Editing a post
    const handleClick2= () => {
        fetch('http://localhost:3000/blogs/' + blog.id, {
            method: 'EDIT'
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