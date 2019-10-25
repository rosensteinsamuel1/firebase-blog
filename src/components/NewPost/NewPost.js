import React, { Component } from 'react';
import styles from './NewPost.module.css';

class NewPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: '',
            author: 'Max',
            location: ''
        }

        this.submitHandler = this.submitHandler.bind(this);
    }
    
    submitHandler = () => { //(e)
       // e.preventDefault();
        const data = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author,
            location: this.state.location
        }
        this.props.firebaseRef.push(data);
    }

    render () {
        return (
            <div className={styles.NewPost}>
                <h1>New Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <textarea rows="4" value={this.state.author} onChange={(event) => this.setState({author: event.target.value})} />
                <label>Location</label>
                <select value={this.state.location} onChange={(event) => this.setState({location: event.target.value})}>
                    <option value="">--Choose Location--</option>
                    <option value="Columbus">Columbus</option>
                    <option value="Jerusalem">Jerusalem</option>
                </select>
                <button onClick= {this.submitHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;