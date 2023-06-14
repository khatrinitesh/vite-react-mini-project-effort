import React , { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid'
import { addPost } from "./action";

const PostForm = () => {
    const dispatch = useDispatch()

    //Adding Some CSS to give a good look
    const myStyle={
        backgroundColor: "white",
        minHeight: "2rem",
        display: "flex",

        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "black"
    }

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSavePostClicked = () => {

        const newPost={
            id: uuidv4(), // Generate a unique ID 
              title: title,
              content: content
        }
          dispatch(addPost(newPost))

        setTitle('')
        setContent('')
    }


    return (
        <section>
            <h2>Add a New Post</h2>
            <form style={myStyle}>
                <label htmlFor="postTitle">Post Title:</label>
                <input type="text" 
                id="postTitle" 
                name="postTitle" 
                value={title} 
                onChange={onTitleChanged}
                />

                <label htmlFor="postContent">Content:</label>
                <textarea id="postContent" 
                name="postContent" value={content}
                onChange={onContentChanged}
                />
                <button style={{margin:'10px'}}
                type="button" 
                onClick={onSavePostClicked}>
                    Save Post
                </button>
            </form>
        </section>
    )
}
export default PostForm