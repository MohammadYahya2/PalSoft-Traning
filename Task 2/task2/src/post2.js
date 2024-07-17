import React from 'react';
import './Post2.css';

function Post2() {
return (
<div className="post-container">
    <div className="post-text">
        <h1>Light, Fast & Powerful</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
            Aenean massa. Cum sociis natoque penatibus 
        </p>
        <p>et magnis dis parturient montes, nascetur ridiculus mus.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        <div className="image-items-container">
            <div className="image-item">
                <img src="/img1.png" alt="Product" /> 
                <h4>Title Goes Here</h4>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
            </div>
            <div className="image-item">
                <img src="/img1.png" alt="Product" /> 
                <h4>Title Goes Here</h4>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
            </div>
        </div>
    </div>
    
    <div className="post-image">
        <div className="image-item">
            <img src="/img3.png" alt="Product" /> 
        </div>
    </div>
</div>
);
}

export default Post2;
