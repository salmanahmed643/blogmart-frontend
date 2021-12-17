import React from 'react';
import './Setting.css';
import profile_img from '../../img/post-1.jpg';

const Setting = () => {
    return (
        <>
            <div className="settingSection">
                <div className="settingWrapper">
                    <div className="settingTitle">
                        <span className="settingUpdateTitle"><i className="fas fa-user-edit"></i> update your account</span>
                        <span className="settingDelete"> <i className="fas fa-user-times"></i> delete account</span>
                    </div>
                    <form className="settingForm">
                        <h4 className="profilePictureTitle">Profile Picture</h4>
                        <div className="settingProfilePicture">
                            <img src={profile_img} alt="" />
                            <label htmlFor="fileInput">
                                <i className="settingPPIcon far fa-user-circle"></i>
                            </label>
                            <input type="file" id="fileInput" style={{display: "none"}} />
                        </div>
                        <label htmlFor="userName">Username</label>
                        <input type="text" id="userName" placeholder="Username" />

                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" placeholder="Email" />

                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Password" />

                        <button className="settingUpdateButton">Update</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Setting;