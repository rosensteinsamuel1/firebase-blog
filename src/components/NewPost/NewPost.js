import React, { Component } from 'react';
import styles from './NewPost.module.css';

class NewPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: '',
            author: 'Sam',
            location: '',
            category: ''
        }

        this.submitHandler = this.submitHandler.bind(this);
    }
    
    submitHandler = () => { //(e)
       // e.preventDefault();
        const data = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author,
            location: this.state.location,
            category: this.state.category
        }
        this.props.firebaseRef.push(data);
    }

    render () {
        return (
            <div className={styles.NewPost}>
                <h3>New Post</h3>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Category</label>
                <select value={this.state.category} onChange={(event) => this.setState({location: event.target.value})}>
                    <option value="">--Choose Location--</option>
                    <option value="Community">Community</option>
                    <option value="Housing">Housing</option>
                    <option value="Jobs">Jobs</option>
                    <option value="Services">Services</option>
                </select>
                <label>Author</label>
                <textarea rows="1" value={this.state.author} onChange={(event) => this.setState({author: event.target.value})} />
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