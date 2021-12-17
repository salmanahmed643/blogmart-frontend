import React from 'react';
import './Settings.css';
import Setting from '../Setting/Setting';
import Sidebar from '../Shared/Sidebar/Sidebar';

const Settings = () => {
    return (
        <>
            <div className="sittingsSection">
                <div className="sittingsWrapper">
                    <Setting/>
                </div>
                <Sidebar/>
            </div>
        </>
    );
};

export default Settings;