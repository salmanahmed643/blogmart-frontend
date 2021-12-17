import React from 'react';
import './Write.css';
import write_img from "../../img/post-1.jpg"

const Write = () => {
    return (
        <>
            <div className="writeSection">
                <div className="writeImg">
                    <img src={write_img} alt="" />
                </div>
                <form className="writeForm">
                    <div className="writeFormGroup">
                        <label htmlFor="fileInput">
                            <i className="writeFileIcon fas fa-plus"></i>
                        </label>
                        <input 
                            style={{display: "none"}} 
                            type="file" 
                            id="fileInput" 
                        />
                        <input 
                            className="writeInputTitle"  
                            autoFocus={true} 
                            type="text" 
                            placeholder="Title..." 
                        />
                    </div>
                    <div className="writeFormGroup">
                        <textarea 
                            className="writeInputTitle writeTextareaDetails" 
                            placeholder="whats on your mind"
                        />
                    </div>
                    <button className="writePublish">
                        Publish
                    </button>
                </form>
            </div> 
        </>
    );
};

export default Write;