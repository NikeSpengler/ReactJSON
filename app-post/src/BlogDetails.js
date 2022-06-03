import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import EditPost from "./EditPost";
import useFetch from "./useFetch";
import { Modal, Button } from "react-bootstrap";
// import BlogList from "./BlogList";


/**
 * This document shows the user detailed information about a post.
 * Here are a button and a method for deleting a post.
 * Here are also a button for editing a post.
 */


//Through this function specific blogpost are fetched, by "id"
const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    //Handels the editmodul
    const [show, setShow] = useState(false);

    const handleEditClick = () => setShow(true);
    const handleEditClose = () => setShow(false);

    // useEffect(() => {
    //     handleEditClose()
    // }, [blog])


    //Deleting a post
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    //Edit a post
    // const editBlogpost = (id, editedBlogpost) => {
    //     BlogList(blogs.map((blog) => blog.id === id ? editedBlogpost : blog))
    // }


    //The return of the choosen post by title and the two buttons, "delete" and "edit"
    return ( 
        <div className="blog-details">
            <div>
                { isPending && <div>Loading...</div> }
                { error && <div>{ error }</div> }
                { blog && (
                    <article>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                        <div>{ blog.body }</div>
                        <button onClick={handleClick}>Delete</button>
                        <Button onClick={() => handleEditClick(id)}>Edit</Button>
                    </article>
                )}
            </div>
            <div>
                <Modal show={show} onHide={handleEditClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Edit Blogpost
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditPost theBlog={blog}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleEditClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {/* <BlogDetails.Provider value= {{blog, editBlogpost}}>
                {props.children}
            </BlogDetails.Provider> */}
        </div>
     );
}
 
export default BlogDetails;