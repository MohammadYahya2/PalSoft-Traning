import React from 'react';
import './Post.css';


function Post() {
return (
<div className="post-container">
    <div className="post-text">
    <h1>Introduce Your Product</h1>
    <h1>Quickly & Effectively</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
    </p>
    <p> nascetur ridiculus mus. 
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
    <button className="purchase-button">Purchase UI Kit</button>
    <button className="learn-button">Learn More</button>
    </div>
    <div className="post-image">
    <img src="/download.png" alt="Product" /> 
    </div>
</div>
);
}

export default Post;
