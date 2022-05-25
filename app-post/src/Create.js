import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
    //states
    const  [title, setTitle] = useState('');
    const  [body, setBody] = useState('');
    const  [author, setAuthor] = useState('');
    const  [isPending, setIsPending] = useState(false);
    const history = useHistory();

    //function for submit new blog posts
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        //fetches new post and adds it to the db.json file
        fetch('http://localhost:3000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            //converts data into json
            body: JSON.stringify(blog)
        }) .then(() => {
            console.log('New blog added');
            setIsPending(false);
            // history.go(-1);
            history.push('/');
        }) 
    }

    //Form for creating a new blog
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="nike">Nike</option>
                    <option value="emil">Emil</option>
                    <option value="ona">Ona</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;