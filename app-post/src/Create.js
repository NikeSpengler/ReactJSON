import { useState } from "react";

const Create = () => {
    //states
    const  [title, setTitle] = useState('');
    const  [body, setBody] = useState('');
    const  [author, setAuthor] = useState('');

    //function for submit new blod posts
    const handleSubmit = (e) => {
        e.preventDefault();
    }

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
                <button>Add Blog</button>
                <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p>
            </form>
        </div>
     );
}
 
export default Create;