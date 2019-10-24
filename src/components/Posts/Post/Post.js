import React from 'react';

// import './Post.css';

const post = (props) => (
    <article className="Post">
        <h1>{props.title}</h1>
        <h1>{props.location}</h1>
        <br></br>
    </article>
);

export default post;