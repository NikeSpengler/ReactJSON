import { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import BlogDetails from './BlogDetails';

/**
 * 
 * File for editing a post 
 */

const EditPost = (theBlog) => {

    const id =  theBlog.id;

    const [title, setTitle] = useState(theBlog.title);
    const [body, setBody] = useState(theBlog.body);
    const [author, setAuthor] = useState(theBlog.author);

    const {editBlogpost} = useContext(BlogDetails);

    const editedBlogpost = {id, title, body, author}

    const handleSubmit = (e) => {
        e.preventDefault();
        editBlogpost(id, editedBlogpost)
    }

    return ( 
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Blogbody"
                    name="body"
                    rows={3}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Author"
                    name="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Edit post
            </Button>
        </Form>
     );
}
 
export default EditPost;


//Test for editing a post
// import { useState } from "react";
// import { useHistory } from 'react-router-dom';


// /**
//  * 
//  * @returns This file/code is similir to the "create" file
//  * and lets the user edit a post.
//  */

// const EditPost = () => {
//     //states
//     const  [title, setTitle] = useState('');
//     const  [body, setBody] = useState('');
//     const  [author, setAuthor] = useState('');
//     const  [isPending, setIsPending] = useState(false);
//     const history = useHistory();

//     //function for submit of editing posts
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const blog = { title, body, author };

//         setIsPending(true);

//         //fetches new post and adds it to the db.json file
//         fetch('http://localhost:8000/blogs', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             //converts data into json
//             body: JSON.stringify(blog)
//         }) .then(() => {
//             console.log('Edited blog added');
//             setIsPending(false);
//             history.push('/');
//         }) 
//     }

//     //Form for editing a blogpost
//     return ( 
//         <div className="edit">
//             <h2>Add a new blog</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>Blog title:</label>
//                 <input 
//                     type="text"
//                     required
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                 />
//                 <label>Blog body:</label>
//                 <textarea
//                     required
//                     value={body}
//                     onChange={(e) => setBody(e.target.value)}
//                 ></textarea>
//                 <label>Blog author:</label>
//                 <select
//                     value={author}
//                     onChange={(e) => setAuthor(e.target.value)}
//                 >
//                     <option value="Nike">Nike</option>
//                     <option value="Emil">Emil</option>
//                     <option value="Ona">Ona</option>
//                 </select>
//                 {!isPending && <button>Edit</button>}
//                 {isPending && <button disabled>Updating blog...</button>}
//             </form>
//         </div>
//      );
// }
 
// export default EditPost;





// import React from 'react';

// const EditPost = ({editFormData, handleEditFormChange, handleCancelClick}) => {
//     return ( 
//         <div>
//          <h2>Edit blog</h2>
//             <form onSubmit={}>
//                 <label>Blog title:</label>
//                 <input 
//                     type="text"
//                     required
//                     value={editFormData.title}
//                     onChange={handleEditFormChange}
//                 />
//                 <label>Blog body:</label>
//                 <textarea
//                     required
//                     value={editFormData.body}
//                     onChange={handleEditFormChange}
                
//                 ></textarea>
//                 <label>Blog author:</label>
//                 <select
//                     value={editFormData.author}
//                     onChange={handleEditFormChange}
//                 >
//                     <option value="nike">Nike</option>
//                     <option value="emil">Emil</option>
//                     <option value="ona">Ona</option>
//                 </select>
//                 <button type="submit">Edit</button>
//                 <button type="submit" onClick={handleCancelClick}>Cancel</button>
//             </form>
//         </div>
//      );
// }
 
// export default EditPost;