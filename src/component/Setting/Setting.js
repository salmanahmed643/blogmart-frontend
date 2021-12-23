import React, { useContext, useState } from 'react';
import './Setting.css';
import { Context } from '../../context/Context';
import axios from 'axios';

const Setting = () => {
    const {user, dispatch} = useContext(Context);
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const PF = "https://secure-headland-36866.herokuapp.com/images/";
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({
            type: "UPDATE_START"
        })
        const updateUser = {
            userId: user._id,
            username,
            email,
            password
        };
        if(file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updateUser.profilePic = filename;
            try{
                await axios.post("https://secure-headland-36866.herokuapp.com/api/upload", data)
            } catch(err) {

            }
        }
        try{
            const res = await axios.put("https://secure-headland-36866.herokuapp.com/api/users/"+user._id, updateUser);
            setUpdateSuccess(true);
            dispatch({
                type: "UPDATE_SUCCESS",
                payload: res.data
            })
        } catch(err) {
            dispatch({
                type: "UPDATE_FAILURE"
            })
        }

    }

    return (
        <>
            <div className="settingSection">
                <div className="settingWrapper">
                    <div className="settingTitle">
                        <span className="settingUpdateTitle"><i className="fas fa-user-edit"></i> update your account</span>
                        <span className="settingDelete"> <i className="fas fa-user-times"></i> delete account</span>
                    </div>
                    <form onSubmit={handleSubmit} className="settingForm">
                        {
                            updateSuccess && <span className='updated'>Profile has been updated</span>
                        }
                        <h4 className="profilePictureTitle">Profile Picture</h4>
                        <div className="settingProfilePicture">
                            <img src={file ? URL.createObjectURL(file) : PF + user.profilePic} alt="" />
                            <label htmlFor="fileInput">
                                <i className="settingPPIcon far fa-user-circle"></i>
                            </label>
                            <input 
                                type="file" 
                                id="fileInput" 
                                style={{display: "none"}} 
                                onChange={e => setFile(e.target.files[0])}
                            />
                        </div>
                        <label htmlFor="userName">Username</label>
                        <input 
                            type="text" 
                            id="userName" 
                            placeholder={user.username}
                            onBlur={e => setUsername(e.target.value)}
                        />

                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            id="email" 
                            placeholder={user.email}
                            onBlur={e => setEmail(e.target.value)}
                        />

                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="Password" 
                            onBlur={e => setPassword(e.target.value)}
                        />

                        <button type="submit" className="settingUpdateButton">Update</button>

                    </form>
                </div>
            </div>
        </>
    );
};

export default Setting;