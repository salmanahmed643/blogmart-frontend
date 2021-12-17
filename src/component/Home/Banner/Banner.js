import React from 'react';
import banner_img from '../../../img/banner.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <div className="banner">
                <div className="bannerImg">
                    <img src={banner_img} alt="" />
                </div>
            </div>
        </>
    );
};

export default Banner;