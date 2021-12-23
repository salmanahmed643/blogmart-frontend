import React, { useContext, useState } from 'react';
import './Write.css';
import axios from 'axios';
import { Context } from '../../context/Context';

const Write = () => {
    const {user} = useContext(Context)
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc
        };
        if(file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.postPhoto = filename;
            try{
                await axios.post("https://secure-headland-36866.herokuapp.com/api/upload", data)
            } catch(err) {

            }
        }
        try{
            const res = await axios.post("https://secure-headland-36866.herokuapp.com/api/posts", newPost);
            window.location.replace("/post/" + res.data._id) 
        } catch(err) {
        }

    }
    return (
        <>
            <div className="writeSection">
                <div className="writeImg">
                    {
                        file &&  <img src={URL.createObjectURL(file)} alt="" />
                    }
                </div>
                <form onSubmit={handleSubmit} className="writeForm">
                    <div className="writeFormGroup">
                        <label htmlFor="fileInput">
                            <i className="writeFileIcon fas fa-plus"></i>
                        </label>
                        <input 
                            style={{display: "none"}} 
                            type="file" 
                            id="fileInput"
                            onChange={e => setFile(e.target.files[0])}
                        />
                        <input 
                            className="writeInputTitle"  
                            autoFocus={true} 
                            type="text" 
                            placeholder="Title..."
                            onBlur={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="writeFormGroup">
                        <textarea 
                            className="writeInputTitle writeTextareaDetails" 
                            placeholder="whats on your mind"
                            onBlur={e => setDesc(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit" 
                        className="writePublish"
                    >
                        Publish
                    </button>
                </form>
            </div> 
        </>
    );
};

export default Write;