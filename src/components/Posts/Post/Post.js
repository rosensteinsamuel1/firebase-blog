import React from 'react';

import styles from './Post.module.css';

const post = (props) => (
    <article className={styles.Post}>
        <h1>{props.title}</h1>
        <h1>{props.location}</h1>
        <br></br>
    </article>
);

export default post;