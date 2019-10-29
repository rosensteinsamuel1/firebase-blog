import React, { Component } from 'react';
import axios from 'axios';

import styles from './FullPost.module.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    // Fetch data whenever new props are received
    componentDidUpdate() {
        if (this.props.id) {
            // Only call setState if a new post was loaded. Otherwise, the componentDidUpdate 
            // method will have an infinite loop because it setState calls componentDidUpdate
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                axios.get('/posts/' + this.props.id)
                    .then(response => {
                    this.setState({loadedPost: response.data});
                });
            }
        }
    }

    deletePostHandler = (id) => {
        axios.delete('/posts/' + this.props.id)
                    .then(response => {
                    console.log(response);
                });
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{textAlign: 'center'}}>LOADING!</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className={styles.FullPost}>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <p>{this.state.loadedPost.author    }</p>
                    <div className={styles.Edit}>
                        <button className={styles.Delete} onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;